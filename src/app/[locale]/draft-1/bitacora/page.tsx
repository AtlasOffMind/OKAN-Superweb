import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft1Bitacora({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("bitacora");

  const items = t.raw("items") as {
    date: string;
    title: string;
    desc: string;
  }[];

  return (
    <>
      {/* ========================================================================= */}
      {/* SECCIÓN 1: CABECERA / TÍTULO DE BITÁCORA (FONDO CON COLORES OKAN)         */}
      {/* - Textos modificables en: src/messages/es.json -> "bitacora.heading/intro" */}
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
      {/* SECCIÓN 2: LISTA EDITORIAL DE NOTICIAS Y NOVEDADES                        */}
      {/* - Artículos modificables en: src/messages/es.json -> "bitacora.items"     */}
      {/* ========================================================================= */}
      <section className="bg-zinc-950 px-6 py-20 text-white md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col divide-y divide-zinc-800 border-t border-zinc-800">
          {items.map((n) => (
            <article key={n.title} className="grid gap-4 py-10 md:grid-cols-4">
              <div className="text-brand-300 text-sm font-semibold tracking-widest uppercase">
                {n.date}
              </div>
              <div className="md:col-span-3">
                <h2 className="font-display text-brand-500 text-3xl font-semibold tracking-tight">
                  {n.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-zinc-400">
                  {n.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

