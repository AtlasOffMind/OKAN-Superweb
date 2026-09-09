"use client";

import { useActionState } from "react";

import { submitContact, type ContactState } from "@/actions/contact";

export type FormVariant = "classic" | "modern" | "bold";

export interface ContactLabels {
  title: string;
  name: string;
  email: string;
  message: string;
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
        type="email"
        name="email"
        required
        placeholder={labels.email}
        className={fieldStyles[variant]}
      />
      <textarea
        name="message"
        required
        rows={4}
        placeholder={labels.message}
        className={fieldStyles[variant]}
      />
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