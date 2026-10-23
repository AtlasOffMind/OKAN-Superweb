"use server";

import { getPayload } from "payload";
import { Resend } from "resend";
import { z } from "zod";

import config from "@payload-config";

const schema = z.object({
    name: z.string().trim().min(1, "required").max(200),
    phoneCountryCode: z.string().regex(/^\+\d{1,3}$/),
    phone: z.string().trim().max(30).regex(/^[\d\s().-]+$/).refine((value) => {
        const digitCount = value.replace(/\D/g, "").length;
        return digitCount >= 7 && digitCount <= 15;
    }),
    email: z.string().trim().email(),
    age: z.coerce.number().int().min(1).max(120),
    gender: z.enum(["male", "female", "other"]),
    program: z.enum(["acting", "dance", "continuingEd"]),
    admissionDate: z.enum(["january-2027", "september-2027", "january-2028", "considering"]).optional(),
    message: z.string().trim().max(250).optional(),
});

export interface AdmissionState {
    ok: boolean;
    error?: string;
}

export async function submitAdmission(
    _previousState: AdmissionState,
    formData: FormData,
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
    });

    if (!parsed.success) {
        return { ok: false, error: "invalid" };
    }

    const { name, phoneCountryCode, email, age, gender, program, admissionDate, message } = parsed.data;
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
                gender,
                interest: program,
                admissionDate,
                message: message || "Solicitud de admisión desde el bloque Empieza tu proceso.",
            },
        });
    } catch {
        return { ok: false, error: "storage" };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;
    const to = process.env.CONTACT_EMAIL || "info@escueladearteokan.com";

    if (!apiKey || !from) {
        console.error("Admission email not sent: RESEND_API_KEY or RESEND_FROM is missing.");
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
            error instanceof Error ? error.message : "Unknown Resend error",
        );
    }

    return { ok: true };
}
