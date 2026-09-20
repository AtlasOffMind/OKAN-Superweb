import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { AdmissionForm } from "@/components/admission-form";

const base = "/draft-1";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft1Admissions({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("admissions");

  const steps = t.raw("process.steps") as { title: string; desc: string }[];

  return (
    <>
      {/* ========================================================================= */}
      {/* SECCIÓN 1: HERO DE ADMISIONES (FONDO CON COLORES OKAN, TÍTULO Y CTA)      */}
      {/* - Textos modificables en: src/messages/es.json -> "admissions"            */}
      {/* ========================================================================= */}
      <section className="relative min-h-[70svh] overflow-hidden bg-[radial-gradient(ellipse_at_top,#24103d_0%,#0a0a0a_62%)] text-white">
        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-end px-6 py-20 md:px-12 md:py-24">
          <h1 className="font-display max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
            {t("heading")}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-200">
            {t("intro")}
          </p>
          <Link
            href={`${base}/contact`}
            className="bg-brand-600 hover:bg-brand-500 mt-9 inline-flex w-fit rounded-full px-7 py-3 text-sm font-semibold text-white transition-colors"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 2: BIENVENIDA / FILOSOFÍA DE ADMISIÓN (BLOQUE CLARO ASIMÉTRICO)    */}
      {/* - Textos modificables en: src/messages/es.json -> "admissions.welcome"    */}
      {/* ========================================================================= */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="text-brand-600 text-sm font-semibold tracking-[0.25em] uppercase">
              {t("welcome.eyebrow")}
            </p>
            <h2 className="font-display mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              {t("welcome.title")}
            </h2>
          </div>
          <p className="max-w-2xl text-xl leading-relaxed text-zinc-600 md:pt-8">
            {t("welcome.text")}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 3: EL PROCESO EN 4 PASOS Y FECHAS CLAVE (FONDO OSCURO)            */}
      {/* - Pasos: 01 Solicitud, 02 Audición, 03 Entrevista, 04 Resultado           */}
      {/* - Textos modificables en: src/messages/es.json -> "admissions.process"     */}
      {/* ========================================================================= */}
      <section className="bg-zinc-950 px-6 py-24 text-white md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-brand-300 text-sm font-semibold tracking-[0.25em] uppercase">
            {t("process.eyebrow")}
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {t("process.title")}
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="border-t border-zinc-700 pt-6">
                <div className="font-display text-brand-400 text-2xl font-semibold">
                  0{i + 1}
                </div>
                <h3 className="font-display mt-3 text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 leading-relaxed text-zinc-400">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Bloque de cierre / despedida */}
          <div className="mt-20 border-t border-zinc-700 pt-10 text-center">
            <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {t("closing.title")}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-400">
              {t("closing.text")}
            </p>
            <AdmissionForm
              labels={{
                open: t("applicationForm.open"),
                close: t("applicationForm.close"),
                name: t("applicationForm.name"),
                phone: t("applicationForm.phone"),
                email: t("applicationForm.email"),
                age: t("applicationForm.age"),
                gender: t("applicationForm.gender"),
                genderOptions: {
                  male: t("applicationForm.genderOptions.male"),
                  female: t("applicationForm.genderOptions.female"),
                  other: t("applicationForm.genderOptions.other"),
                },
                program: t("applicationForm.program"),
                programOptions: {
                  acting: t("applicationForm.programOptions.acting"),
                  dance: t("applicationForm.programOptions.dance"),
                  continuingEd: t("applicationForm.programOptions.continuingEd"),
                },
                admissionDate: t("applicationForm.admissionDate"),
                admissionDateOptions: {
                  january2027: t("applicationForm.admissionDateOptions.january2027"),
                  september2027: t("applicationForm.admissionDateOptions.september2027"),
                  january2028: t("applicationForm.admissionDateOptions.january2028"),
                  considering: t("applicationForm.admissionDateOptions.considering"),
                },
                submit: t("applicationForm.submit"),
                sending: t("applicationForm.sending"),
                success: t("applicationForm.success"),
                error: t("applicationForm.error"),
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
