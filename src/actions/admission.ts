"use server";

import { getPayload } from "payload";
import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";

import config from "@payload-config";

const schema = z
    .object({
        name: z.string().trim().min(1, "required").max(200),
        phoneCountryCode: z.string().regex(/^\+\d{1,3}$/),
        phone: z
            .string()
            .trim()
            .max(30)
            .regex(/^[\d\s().-]+$/)
            .refine((value) => {
                const digitCount = value.replace(/\D/g, "").length;
                return digitCount >= 7 && digitCount <= 15;
            }),
        email: z.string().trim().email(),
        age: z.coerce.number().int().min(17).max(120),
        completedHighSchool: z.literal("on").optional(),
        parentalPermission: z.literal("on").optional(),
        privacyConsent: z.literal("on"),
        gender: z.enum(["male", "female", "other"]),
        program: z.enum(["acting", "dance", "continuingEd"]),
        admissionDate: z
            .enum(["january-2027", "september-2027", "january-2028", "considering"])
            .optional(),
        message: z.string().trim().max(250).optional(),
        turnstileToken: z.string().min(1),
        website: z.string().max(0).optional(),
    })
    .superRefine((data, context) => {
        if (data.age === 17 && !data.completedHighSchool) {
            context.addIssue({
                code: "custom",
                path: ["completedHighSchool"],
                message: "eligibility",
            });
        }
        if (data.age === 17 && !data.parentalPermission) {
            context.addIssue({
                code: "custom",
                path: ["parentalPermission"],
                message: "eligibility",
            });
        }
    });

const rateWindowMs = 15 * 60 * 1000;
const rateLimit = 5;
const submissionsByIp = new Map<string, number[]>();
const privacyNoticeVersion = "2026-10-23-v1";

async function verifyTurnstile(token: string, remoteIp?: string) {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) return false;

    const response = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ secret, response: token, remoteip: remoteIp }),
            signal: AbortSignal.timeout(10_000),
            cache: "no-store",
        }
    );

    if (!response.ok) return false;
    const result: { success?: boolean; hostname?: string } =
        await response.json();
    if (!result.success) return false;

    const configuredHost = process.env.NEXT_PUBLIC_SITE_URL
        ? new URL(process.env.NEXT_PUBLIC_SITE_URL).hostname
        : undefined;
    return !configuredHost || result.hostname === configuredHost;
}

function consumeRateLimit(ip: string) {
    const now = Date.now();
    const recent = (submissionsByIp.get(ip) ?? []).filter(
        (time) => now - time < rateWindowMs
    );
    if (recent.length >= rateLimit) {
        submissionsByIp.set(ip, recent);
        return false;
    }
    recent.push(now);
    submissionsByIp.set(ip, recent);
    if (submissionsByIp.size > 1000) {
        for (const [key, timestamps] of submissionsByIp) {
            if (timestamps.every((time) => now - time >= rateWindowMs))
                submissionsByIp.delete(key);
        }
    }
    return true;
}

export interface AdmissionState {
    ok: boolean;
    error?: string;
}

export async function submitAdmission(
    _previousState: AdmissionState,
    formData: FormData
): Promise<AdmissionState> {
    const parsed = schema.safeParse({
        name: formData.get("name"),
        phoneCountryCode: formData.get("phoneCountryCode"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        age: formData.get("age"),
        gender: formData.get("gender"),
        program: formData.get("program"),
        admissionDate: formData.get("admissionDate"),
        message: formData.get("message") || undefined,
        completedHighSchool: formData.get("completedHighSchool") || undefined,
        parentalPermission: formData.get("parentalPermission") || undefined,
        privacyConsent: formData.get("privacyConsent"),
        turnstileToken: formData.get("turnstileToken"),
        website: formData.get("website") || "",
    });

    if (!parsed.success) {
        return {
            ok: false,
            error: parsed.error.issues.some(
                (issue) => issue.message === "eligibility"
            )
                ? "eligibility"
                : parsed.error.issues.some(
                    (issue) => issue.path[0] === "privacyConsent"
                )
                    ? "consent"
                    : "invalid",
        };
    }

    const requestHeaders = await headers();
    const remoteIp =
        requestHeaders.get("x-real-ip") ??
        requestHeaders.get("cf-connecting-ip") ??
        requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        "unknown";

    if (!consumeRateLimit(remoteIp)) return { ok: false, error: "rateLimit" };

    try {
        if (!(await verifyTurnstile(parsed.data.turnstileToken, remoteIp))) {
            return { ok: false, error: "captcha" };
        }
    } catch {
        console.error("Turnstile verification request failed.");
        return { ok: false, error: "captcha" };
    }

    const {
        name,
        phoneCountryCode,
        email,
        age,
        gender,
        program,
        admissionDate,
        message,
    } = parsed.data;
    const phone = `${phoneCountryCode} ${parsed.data.phone.replace(/[\s().-]/g, "")}`;

    try {
        const payload = await getPayload({ config });
        await payload.create({
            collection: "submissions",
            data: {
                name,
                phone,
                email,
                age,
                completedHighSchool: age === 17,
                parentalPermission: age === 17,
                gender,
                interest: program,
                admissionDate,
                privacyConsent: true,
                privacyNoticeVersion,
                consentedAt: new Date().toISOString(),
                message:
                    message ||
                    "Solicitud de admisión desde el bloque Empieza tu proceso.",
            },
            context: { admissionFormValidated: true },
            overrideAccess: true,
        });
    } catch {
        return { ok: false, error: "storage" };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;
    const to = process.env.CONTACT_EMAIL || "info@escueladearteokan.com";

    if (!apiKey || !from) {
        console.error(
            "Admission email not sent: RESEND_API_KEY or RESEND_FROM is missing."
        );
        return { ok: true };
    }

    try {
        const resend = new Resend(apiKey);
        const { error } = await resend.emails.send({
            from,
            to: [to],
            replyTo: email,
            subject: `Nueva solicitud de admisión de ${name}`,
            text: `Nombre: ${name}\nTeléfono: ${phone}\nCorreo: ${email}\nEdad: ${age}\nSexo: ${gender}\nLicenciatura: ${program}\nFecha de ingreso: ${admissionDate}\nMensaje: ${message || "Sin mensaje"}`,
        });

        if (error) {
            console.error("Admission email failed in Resend:", error.message);
        }
    } catch (error) {
        console.error(
            "Admission email request failed:",
            error instanceof Error ? error.message : "Unknown Resend error"
        );
    }

    return { ok: true };
}
