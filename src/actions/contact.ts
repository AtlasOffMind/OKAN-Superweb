"use server";

import { getPayload } from "payload";
import { Resend } from "resend";
import { z } from "zod";

import config from "@payload-config";

const schema = z.object({
  name: z.string().trim().min(1, "required").max(200),
  email: z.string().trim().email(),
  message: z.string().trim().min(1, "required").max(5000),
});

export interface ContactState {
  ok: boolean;
  error?: string;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return { ok: false, error: "invalid" };
  }

  const { name, email, message } = parsed.data;

  try {
    const payload = await getPayload({ config });
    await payload.create({
      collection: "submissions",
      data: { name, email, message },
    });
  } catch {
    return { ok: false, error: "storage" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.CONTACT_EMAIL || "hola@okan.edu.mx";

  if (apiKey && from) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from,
        to: [to],
        replyTo: email,
        subject: `Nueva solicitud de ${name}`,
        text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
      });
    } catch {
      // El email es secundario: no fallamos el envío por un error de Resend.
    }
  }

  return { ok: true };
}