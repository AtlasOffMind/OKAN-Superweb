import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft1Programs({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("programs");
  const careers = [
    { key: "acting", image: "/images/Pograms/Programs/actuacion2.jpg" },
    { key: "dance", image: "/images/Pograms/Programs/danza2.jpg" },
    { key: "continuingEd", image: "/images/Pograms/Programs/estudios_continuos2.jpg" },
  ] as const;

  return (
    <>
      {/* ========================================================================= */}
      {/* SECCIÓN 1: CABECERA / HERO DE PROGRAMAS (TÍTULO PRINCIPAL Y DESCRIPCIÓN)  */}
      {/* - Textos modificables en: src/messages/es.json -> "programs.heading/intro" */}
      {/* ========================================================================= */}
      <section className="bg-[radial-gradient(ellipse_at_top,#24103d_0%,#0a0a0a_62%)] px-6 py-28 text-white md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-brand-300 text-sm font-semibold tracking-[0.3em] uppercase">
            {t("eyebrow")}
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
            {t("heading")}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-300">
            {t("intro")}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 2: BLOQUES DE PROGRAMAS (ACTUACIÓN, DANZA, ESTUDIOS CONTINUOS)    */}
      {/* - Fotos de fondo en: public/images/Pograms/                               */}
      {/* - Títulos grandes morados en la esquina superior izquierda               */}
      {/* - Malla / Resultados formativos en la parte inferior                     */}
      {/* - Textos modificables en: src/messages/es.json -> "programs.*"           */}
      {/* ========================================================================= */}
      <section>
        <div className="grid md:grid-cols-3">
          {careers.map(({ key, image }) => (
            <article key={key} className="group relative overflow-hidden bg-zinc-950 text-white">
              {/* Imagen del programa con título gigante y lema */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/65" />
                <h2 className="font-display text-brand-600 absolute top-7 left-7 z-10 max-w-[92%] text-4xl font-semibold leading-[0.95] tracking-tight drop-shadow-[0_3px_16px_rgba(0,0,0,0.65)] sm:text-5xl md:top-60 md:left-12 md:max-w-[85%] md:text-7xl">
                  {t(`${key}.title`)}
                </h2>
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                  <p className="mt-5 text-base font-medium tracking-[0.12em] text-white uppercase md:text-lg">
                    {t(`${key}.tagline`)}
                  </p>
                </div>
              </div>

              {/* Descripción detallada y lista de aprendizajes del programa */}
              <div className="grid gap-8 border-t border-zinc-800 p-7 md:p-10">
                <div className="grid gap-4">
                  {t.raw(`${key}.desc`).map((paragraph: string, index: number) => (
                    <p
                      key={index}
                      className="text-base leading-[1.7] text-white md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <ul className="flex flex-col gap-3 text-sm leading-relaxed text-zinc-200 md:text-base">
                  {t.raw(`${key}.outcomes`).map((outcome: string) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <span className="bg-brand-400 mt-2 h-1 w-1 shrink-0 rounded-full" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 3: LLAMADO A LA ACCIÓN (TEXTO ESTÁTICO, SIN BOTÓN)                */}
      {/* - Textos modificables en: src/messages/es.json -> "programs.cta"         */}
      {/* ========================================================================= */}
      <section className="bg-brand-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            {t("cta.text")}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 4: VINCULACIÓN INTERNACIONAL (COMPAÑÍAS/INSTITUCIONES ALIADAS)    */}
      {/* - Espacio reservado para 4 compañías en formato vertical.                 */}
      {/* - COMPLETAR MANUALMENTE en: src/messages/es.json y en.json ->             */}
      {/*   "programs.international.partners" (name + desc de cada compañía)       */}
      {/* ========================================================================= */}
      <section className="bg-zinc-950 px-6 py-24 text-white md:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-brand-500 text-4xl font-semibold tracking-tight md:text-5xl">
            {t("international.heading")}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {t("international.intro")}
          </p>
          <div className="mt-14 flex flex-col divide-y divide-zinc-800 border-t border-zinc-800">
            {t
              .raw("international.partners")
              .map((partner: { name: string; desc: string }, index: number) => (
                <div key={index} className="py-8">
                  <h3 className="font-display min-h-[1.5em] text-2xl font-semibold tracking-tight">
                    {partner.name}
                  </h3>
                  <p className="mt-3 min-h-[1.5em] max-w-2xl leading-relaxed text-zinc-400">
                    {partner.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
