"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

import { submitAdmission, type AdmissionState } from "@/actions/admission";

interface AdmissionLabels {
    open: string;
    close: string;
    name: string;
    phone: string;
    phoneCountryCode: string;
    email: string;
    age: string;
    completedHighSchool: string;
    parentalPermission: string;
    gender: string;
    genderOptions: { male: string; female: string; other: string };
    program: string;
    programOptions: { acting: string; dance: string; continuingEd: string };
    admissionDate: string;
    admissionDateOptions: {
        january2027: string;
        september2027: string;
        january2028: string;
        considering: string;
    };
    message?: string;
    messageHint?: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    eligibilityError: string;
    consentError: string;
    captchaError: string;
    rateLimitError: string;
    reviewTitle: string;
    reviewText: string[];
    privacyConsent: string;
    reviewBack: string;
    reviewSubmit: string;
    captchaLabel: string;
    captchaSiteKey: string;
}

const fieldClass =
    "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition-colors focus:border-brand-500";
const initialState: AdmissionState = { ok: false };
const countryCodes = [
    ["+52", "MX"],
    ["+53", "CU"],
    ["+1", "US/CA"],
    ["+54", "AR"],
    ["+55", "BR"],
    ["+56", "CL"],
    ["+57", "CO"],
    ["+58", "VE"],
    ["+34", "ES"],
    ["+44", "GB"],
    ["+49", "DE"],
    ["+33", "FR"],
    ["+39", "IT"],
    ["+51", "PE"],
    ["+502", "GT"],
    ["+503", "SV"],
    ["+504", "HN"],
    ["+505", "NI"],
    ["+506", "CR"],
    ["+507", "PA"],
] as const;

export function AdmissionForm({ labels }: { labels: AdmissionLabels }) {
    const [open, setOpen] = useState(false);
    const [showReview, setShowReview] = useState(false);
    const [age, setAge] = useState("");
    const [turnstileToken, setTurnstileToken] = useState("");
    const [turnstileKey, setTurnstileKey] = useState(0);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const turnstileRef = useRef<TurnstileInstance>(null);
    const [state, formAction, pending] = useActionState(
        async (previousState: AdmissionState, formData: FormData) => {
            const result = await submitAdmission(previousState, formData);
            if (result.ok) setShowReview(false);
            if (result.error === "captcha") {
                setTurnstileToken("");
                setTurnstileKey((key) => key + 1);
            }
            return result;
        },
        initialState
    );

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (showReview && !dialog.open) dialog.showModal();
        if (!showReview && dialog.open) dialog.close();
    }, [showReview]);

    const form = (
        <form
            action={formAction}
            className="mt-8 grid gap-5 rounded-2xl bg-white p-6 text-zinc-900 shadow-2xl sm:grid-cols-2 sm:p-8"
        >
            <input
                className={fieldClass}
                name="name"
                required
                placeholder={labels.name}
            />
            <div className="grid grid-cols-[minmax(7.5rem,0.8fr)_minmax(0,1.2fr)] gap-2">
                <label className="sr-only" htmlFor="admission-phone-country-code">
                    {labels.phoneCountryCode}
                </label>
                <select
                    id="admission-phone-country-code"
                    className={fieldClass}
                    name="phoneCountryCode"
                    aria-label={labels.phoneCountryCode}
                    defaultValue="+52"
                    required
                >
                    {countryCodes.map(([code, country]) => (
                        <option key={code} value={code}>
                            {code} {country}
                        </option>
                    ))}
                </select>
                <input
                    className={fieldClass}
                    name="phone"
                    required
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel-national"
                    placeholder={labels.phone}
                    aria-label={labels.phone}
                />
            </div>
            <input
                className={fieldClass}
                name="email"
                required
                type="email"
                placeholder={labels.email}
            />
            <input
                className={fieldClass}
                name="age"
                required
                type="number"
                min="17"
                max="120"
                placeholder={labels.age}
                value={age}
                onChange={(event) => setAge(event.target.value)}
            />

            {age === "17" && (
                <div className="grid gap-3 sm:col-span-2">
                    <label className="flex items-start gap-3 text-sm leading-relaxed">
                        <input
                            className="mt-1"
                            type="checkbox"
                            name="completedHighSchool"
                            value="on"
                            required
                        />
                        <span>{labels.completedHighSchool}</span>
                    </label>
                    <label className="flex items-start gap-3 text-sm leading-relaxed">
                        <input
                            className="mt-1"
                            type="checkbox"
                            name="parentalPermission"
                            value="on"
                            required
                        />
                        <span>{labels.parentalPermission}</span>
                    </label>
                </div>
            )}

            <select className={fieldClass} name="gender" required defaultValue="">
                <option value="" disabled>
                    {labels.gender}
                </option>
                <option value="male">{labels.genderOptions.male}</option>
                <option value="female">{labels.genderOptions.female}</option>
                <option value="other">{labels.genderOptions.other}</option>
            </select>
            <select className={fieldClass} name="program" required defaultValue="">
                <option value="" disabled>
                    {labels.program}
                </option>
                <option value="acting">{labels.programOptions.acting}</option>
                <option value="dance">{labels.programOptions.dance}</option>
                <option value="continuingEd">
                    {labels.programOptions.continuingEd}
                </option>
            </select>
            <select
                className={`${fieldClass} sm:col-span-2`}
                name="admissionDate"
                required
                defaultValue=""
            >
                <option value="" disabled>
                    {labels.admissionDate}
                </option>
                <option value="january-2027">
                    {labels.admissionDateOptions.january2027}
                </option>
                <option value="september-2027">
                    {labels.admissionDateOptions.september2027}
                </option>
                <option value="january-2028">
                    {labels.admissionDateOptions.january2028}
                </option>
                <option value="considering">
                    {labels.admissionDateOptions.considering}
                </option>
            </select>

            {labels.message && (
                <div className="sm:col-span-2">
                    <textarea
                        className={`${fieldClass} min-h-32 resize-y`}
                        name="message"
                        maxLength={250}
                        placeholder={labels.message}
                    />
                    {labels.messageHint && (
                        <p className="mt-1 text-right text-xs text-zinc-500">
                            {labels.messageHint}
                        </p>
                    )}
                </div>
            )}

            <div
                className="absolute -left-[10000px] h-px w-px overflow-hidden"
                aria-hidden="true"
            >
                <label htmlFor="admission-website">Website</label>
                <input
                    id="admission-website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>
            <input type="hidden" name="turnstileToken" value={turnstileToken} />

            {state.ok && (
                <p className="text-sm font-medium text-emerald-600 sm:col-span-2">
                    {labels.success}
                </p>
            )}
            {state.error && (
                <p
                    role="alert"
                    className="text-sm font-medium text-red-600 sm:col-span-2"
                >
                    {state.error === "eligibility"
                        ? labels.eligibilityError
                        : state.error === "consent"
                            ? labels.consentError
                            : state.error === "captcha"
                                ? labels.captchaError
                                : state.error === "rateLimit"
                                    ? labels.rateLimitError
                                    : labels.error}
                </p>
            )}
            <button
                type="button"
                disabled={pending}
                onClick={(event) => {
                    const formElement = event.currentTarget.form;
                    if (formElement?.reportValidity()) setShowReview(true);
                }}
                className="hover:bg-brand-700 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors disabled:opacity-60 sm:col-span-2"
            >
                {labels.submit}
            </button>

            {showReview && (
                <dialog
                    ref={dialogRef}
                    onClose={() => setShowReview(false)}
                    className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-lg bg-white p-6 text-zinc-900 shadow-2xl backdrop:bg-black/70 sm:p-8"
                >
                    <h2
                        id="admission-review-title"
                        className="font-display text-2xl font-semibold"
                    >
                        {labels.reviewTitle}
                    </h2>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
                        {labels.reviewText.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                    <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed">
                        <input
                            className="mt-1"
                            type="checkbox"
                            name="privacyConsent"
                            value="on"
                            required={showReview}
                        />
                        <span>{labels.privacyConsent}</span>
                    </label>
                    {labels.captchaSiteKey ? (
                        <div className="mt-5">
                            <p className="mb-2 text-sm text-zinc-700">
                                {labels.captchaLabel}
                            </p>
                            <Turnstile
                                key={turnstileKey}
                                ref={turnstileRef}
                                siteKey={labels.captchaSiteKey}
                                options={{ theme: "light" }}
                                onSuccess={setTurnstileToken}
                                onExpire={() => setTurnstileToken("")}
                                onError={() => setTurnstileToken("")}
                            />
                        </div>
                    ) : (
                        <p role="alert" className="mt-5 text-sm font-medium text-red-600">
                            {labels.captchaError}
                        </p>
                    )}
                    <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            onClick={() => setShowReview(false)}
                            className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold"
                        >
                            {labels.reviewBack}
                        </button>
                        <button
                            type="submit"
                            disabled={pending || !labels.captchaSiteKey || !turnstileToken}
                            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
                        >
                            {pending ? labels.sending : labels.reviewSubmit}
                        </button>
                    </div>
                </dialog>
            )}
        </form>
    );

    if (!labels.open) {
        return form;
    }

    return (
        <div className="mx-auto mt-8 max-w-3xl text-left">
            <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpen((currentOpen) => !currentOpen)}
                className="bg-brand-600 hover:bg-brand-500 mx-auto block rounded-full px-8 py-3 text-sm font-semibold text-white transition-colors"
            >
                {open ? labels.close : labels.open}
            </button>
            <div
                className={`grid transition-[grid-template-rows,opacity] duration-250 ease-out ${open ? "mt-8 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                aria-hidden={!open}
            >
                <div className="min-h-0 overflow-hidden">{form}</div>
            </div>
        </div>
    );
}
