import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import InfoCarousel, {
  type InfoCarouselItem,
} from "@/components/InfoCarousel";

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

  // Máximo 10 noticias: al agregar una nueva en "bitacora.news.items"
  // (es.json/en.json), elimina la más antigua para no pasar de 10.
  const newsItems = (t.raw("news.items") as InfoCarouselItem[]).slice(0, 10);
  // La Biblioteca no tiene límite de elementos.
  const libraryItems = t.raw("library.items") as InfoCarouselItem[];

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
      {/* SECCIÓN 2: CARRUSEL "NOTICIAS OKAN" (MÁXIMO 10, MÁS RECIENTE PRIMERO)     */}
      {/* - Artículos modificables en: src/messages/es.json -> "bitacora.news.items" */}
      {/* ========================================================================= */}
      <section className="bg-zinc-950 px-6 py-16 text-white md:px-12">
        <div className="mx-auto max-w-6xl">
          <InfoCarousel items={newsItems} linkLabel={t("readMore")} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 3: CARRUSEL "BIBLIOTECA" (SIN LÍMITE DE ELEMENTOS)                */}
      {/* - Artículos modificables en: src/messages/es.json -> "bitacora.library.items" */}
      {/* ========================================================================= */}
      <section className="bg-zinc-950 px-6 pt-4 pb-24 text-white md:px-12">
        <div className="mx-auto max-w-6xl">
          <InfoCarousel items={libraryItems} linkLabel={t("readMore")} />
        </div>
      </section>
    </>
  );
}

