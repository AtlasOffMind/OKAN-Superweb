"use client";

import { useActionState, useState } from "react";

import { submitAdmission, type AdmissionState } from "@/actions/admission";

interface AdmissionLabels {
    open: string;
    close: string;
    name: string;
    phone: string;
    email: string;
    age: string;
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
}

const fieldClass =
    "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition-colors focus:border-brand-500";
const initialState: AdmissionState = { ok: false };

export function AdmissionForm({ labels }: { labels: AdmissionLabels }) {
    const [open, setOpen] = useState(false);
    const [state, formAction, pending] = useActionState(
        submitAdmission,
        initialState,
    );

    const form = (
        <form
            action={formAction}
            className="mt-8 grid gap-5 rounded-2xl bg-white p-6 text-zinc-900 shadow-2xl sm:grid-cols-2 sm:p-8"
        >
            <input className={fieldClass} name="name" required placeholder={labels.name} />
            <input className={fieldClass} name="phone" required type="tel" placeholder={labels.phone} />
            <input className={fieldClass} name="email" required type="email" placeholder={labels.email} />
            <input className={fieldClass} name="age" required type="number" min="1" max="120" placeholder={labels.age} />

            <select className={fieldClass} name="gender" required defaultValue="">
                <option value="" disabled>{labels.gender}</option>
                <option value="male">{labels.genderOptions.male}</option>
                <option value="female">{labels.genderOptions.female}</option>
                <option value="other">{labels.genderOptions.other}</option>
            </select>
            <select className={fieldClass} name="program" required defaultValue="">
                <option value="" disabled>{labels.program}</option>
                <option value="acting">{labels.programOptions.acting}</option>
                <option value="dance">{labels.programOptions.dance}</option>
                <option value="continuingEd">{labels.programOptions.continuingEd}</option>
            </select>
            <select className={`${fieldClass} sm:col-span-2`} name="admissionDate" required defaultValue="">
                <option value="" disabled>{labels.admissionDate}</option>
                <option value="january-2027">{labels.admissionDateOptions.january2027}</option>
                <option value="september-2027">{labels.admissionDateOptions.september2027}</option>
                <option value="january-2028">{labels.admissionDateOptions.january2028}</option>
                <option value="considering">{labels.admissionDateOptions.considering}</option>
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

            {state.ok && <p className="text-sm font-medium text-emerald-600 sm:col-span-2">{labels.success}</p>}
            {state.error && <p className="text-sm font-medium text-red-600 sm:col-span-2">{labels.error}</p>}
            <button
                type="submit"
                disabled={pending}
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60 sm:col-span-2"
            >
                {pending ? labels.sending : labels.submit}
            </button>
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
                className="mx-auto block rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
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
