"use client";

import { useActionState, useState } from "react";

import { submitContact, type ContactState } from "@/actions/contact";

export type FormVariant = "classic" | "modern" | "bold";

export const MESSAGE_MAX_LENGTH = 250;

export interface ContactLabels {
  title: string;
  name: string;
  age: string;
  email: string;
  gender: string;
  genderOptions: { male: string; female: string; other: string };
  phone: string;
  interest: string;
  interestOptions: { acting: string; dance: string; continuingEd: string };
  message: string;
  messageHint: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
}

const containerStyles: Record<FormVariant, string> = {
  classic: "rounded-2xl border border-zinc-200 p-8",
  modern: "rounded-3xl border border-zinc-200 p-8 shadow-sm",
  bold: "rounded-2xl border border-zinc-800 p-8",
};

const titleStyles: Record<FormVariant, string> = {
  classic: "font-display text-2xl font-semibold",
  modern: "font-display text-2xl font-semibold",
  bold: "font-display text-2xl font-semibold italic",
};

const fieldStyles: Record<FormVariant, string> = {
  classic:
    "rounded-xl border border-zinc-300 px-4 py-3 outline-none transition-colors focus:border-brand-500",
  modern:
    "rounded-xl border border-zinc-300 px-4 py-3 outline-none transition-colors focus:border-brand-500",
  bold: "rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 outline-none transition-colors focus:border-brand-500",
};

const buttonStyles: Record<FormVariant, string> = {
  classic:
    "rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60",
  modern:
    "rounded-xl bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800 disabled:opacity-60",
  bold: "rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition-opacity hover:opacity-90 disabled:opacity-60",
};

const successStyles: Record<FormVariant, string> = {
  classic: "text-sm font-medium text-emerald-600",
  modern: "text-sm font-medium text-emerald-600",
  bold: "text-sm font-medium text-emerald-400",
};

const errorStyles: Record<FormVariant, string> = {
  classic: "text-sm font-medium text-red-600",
  modern: "text-sm font-medium text-red-600",
  bold: "text-sm font-medium text-red-400",
};

const labelStyles: Record<FormVariant, string> = {
  classic: "text-xs font-semibold tracking-widest text-zinc-500 uppercase",
  modern: "text-xs font-semibold tracking-widest text-zinc-500 uppercase",
  bold: "text-xs font-semibold tracking-widest text-zinc-400 uppercase",
};

const radioLabelStyles: Record<FormVariant, string> = {
  classic: "flex items-center gap-2 text-sm text-zinc-700",
  modern: "flex items-center gap-2 text-sm text-zinc-700",
  bold: "flex items-center gap-2 text-sm text-zinc-200",
};

const hintStyles: Record<FormVariant, string> = {
  classic: "text-right text-xs text-zinc-400",
  modern: "text-right text-xs text-zinc-400",
  bold: "text-right text-xs text-zinc-500",
};

const initialState: ContactState = { ok: false };

export function ContactForm({
  labels,
  variant,
}: {
  labels: ContactLabels;
  variant: FormVariant;
}) {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );
  const [messageLength, setMessageLength] = useState(0);

  return (
    <form
      action={formAction}
      className={`flex flex-col gap-5 ${containerStyles[variant]}`}
    >
      <h2 className={titleStyles[variant]}>{labels.title}</h2>
      <input
        type="text"
        name="name"
        required
        placeholder={labels.name}
        className={fieldStyles[variant]}
      />
      <input
        type="number"
        name="age"
        required
        min="1"
        max="120"
        placeholder={labels.age}
        className={fieldStyles[variant]}
      />
      <input
        type="email"
        name="email"
        required
        placeholder={labels.email}
        className={fieldStyles[variant]}
      />
      <input
        type="tel"
        name="phone"
        required
        placeholder={labels.phone}
        className={fieldStyles[variant]}
      />

      {/* Sexo */}
      <fieldset className="flex flex-col gap-2">
        <legend className={labelStyles[variant]}>{labels.gender}</legend>
        <div className="flex flex-wrap gap-4">
          <label className={radioLabelStyles[variant]}>
            <input type="radio" name="gender" value="male" required />
            {labels.genderOptions.male}
          </label>
          <label className={radioLabelStyles[variant]}>
            <input type="radio" name="gender" value="female" required />
            {labels.genderOptions.female}
          </label>
          <label className={radioLabelStyles[variant]}>
            <input type="radio" name="gender" value="other" required />
            {labels.genderOptions.other}
          </label>
        </div>
      </fieldset>

      {/* Interés (malla curricular) */}
      <select
        name="interest"
        required
        defaultValue=""
        className={fieldStyles[variant]}
      >
        <option value="" disabled>
          {labels.interest}
        </option>
        <option value="acting">{labels.interestOptions.acting}</option>
        <option value="dance">{labels.interestOptions.dance}</option>
        <option value="continuingEd">
          {labels.interestOptions.continuingEd}
        </option>
      </select>

      <div className="flex flex-col gap-1">
        <span className={labelStyles[variant]}>{labels.messageHint}</span>
        <textarea
          name="message"
          required
          rows={4}
          maxLength={MESSAGE_MAX_LENGTH}
          placeholder={labels.message}
          onChange={(e) => setMessageLength(e.target.value.length)}
          className={fieldStyles[variant]}
        />
        <span className={hintStyles[variant]}>
          {messageLength}/{MESSAGE_MAX_LENGTH}
        </span>
      </div>

      {state.ok && <p className={successStyles[variant]}>{labels.success}</p>}
      {state.error && <p className={errorStyles[variant]}>{labels.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className={buttonStyles[variant]}
      >
        {pending ? labels.sending : labels.submit}
      </button>
    </form>
  );
}