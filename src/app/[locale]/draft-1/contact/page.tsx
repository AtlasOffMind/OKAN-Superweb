import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ContactForm } from "@/components/contact-form";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft1Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      {/* ========================================================================= */}
      {/* SECCIÓN 1: CABECERA / TÍTULO DE CONTACTO                                  */}
      {/* - Textos modificables en: src/messages/es.json -> "contact.heading/intro" */}
      {/* ========================================================================= */}
      <section className="border-b border-zinc-200 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
            {t("heading")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-500">{t("intro")}</p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 2: DATOS DE CONTACTO Y FORMULARIO DE MENSAJES                     */}
      {/* - Datos (email, teléfono, dirección, horario) en: src/messages/es.json     */}
      {/* - Componente de formulario en: src/components/contact-form.tsx            */}
      {/* ========================================================================= */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          {/* Columna Izquierda: Información de contacto */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
                {t("emailLabel")}
              </div>
              <div className="mt-2 text-lg">{t("email")}</div>
            </div>
            <div>
              <div className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
                {t("phoneLabel")}
              </div>
              <div className="mt-2 text-lg">{t("phone")}</div>
            </div>
            <div>
              <div className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
                {t("addressLabel")}
              </div>
              <div className="mt-2 text-lg">{t("address")}</div>
            </div>
            <div>
              <div className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
                {t("hoursLabel")}
              </div>
              <div className="mt-2 text-lg">{t("hours")}</div>
            </div>
          </div>

          {/* Columna Derecha: Formulario interactivo para enviar mensajes */}
          <ContactForm
            variant="classic"
            labels={{
              title: t("form.title"),
              name: t("form.name"),
              email: t("form.email"),
              message: t("form.message"),
              submit: t("form.submit"),
              sending: t("form.sending"),
              success: t("form.success"),
              error: t("form.error"),
            }}
          />
        </div>
      </section>
    </>
  );
}
