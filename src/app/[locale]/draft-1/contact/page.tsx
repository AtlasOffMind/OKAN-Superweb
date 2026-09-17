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
      {/* SECCIÓN 1: CABECERA / TÍTULO DE CONTACTO (FONDO CON COLORES OKAN)         */}
      {/* - Textos modificables en: src/messages/es.json -> "contact.heading/intro" */}
      {/* ========================================================================= */}
      <section className="bg-[radial-gradient(ellipse_at_top,#24103d_0%,#0a0a0a_62%)] px-6 py-28 text-white md:px-12 md:py-36">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-8xl">
            {t("heading")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-300">{t("intro")}</p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 2: DATOS DE CONTACTO Y FORMULARIO DE MENSAJES                     */}
      {/* - Datos (email, teléfono, dirección, horario) en: src/messages/es.json     */}
      {/* - Componente de formulario en: src/components/contact-form.tsx            */}
      {/* ========================================================================= */}
      <section className="bg-brand-50 px-6 py-20 md:px-12">
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
              age: t("form.age"),
              email: t("form.email"),
              gender: t("form.gender"),
              genderOptions: {
                male: t("form.genderOptions.male"),
                female: t("form.genderOptions.female"),
                other: t("form.genderOptions.other"),
              },
              phone: t("form.phone"),
              interest: t("form.interest"),
              interestOptions: {
                acting: t("form.interestOptions.acting"),
                dance: t("form.interestOptions.dance"),
                continuingEd: t("form.interestOptions.continuingEd"),
              },
              message: t("form.message"),
              messageHint: t("form.messageHint"),
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
