import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {
    ProductionCarousel,
    type ProductionItem,
} from "@/components/ProductionCarousel";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft1Laboratorio({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("okanEnAccion.laboratorio");
    const productions = t.raw("productions") as ProductionItem[];

    return (
        <>
            {/* ========================================================================= */}
            {/* SECCIÓN 1: HERO (FONDO CON COLORES OKAN)                                   */}
            {/* - Textos modificables en: src/messages/es.json -> "okanEnAccion.laboratorio" */}
            {/* ========================================================================= */}
            <section className="bg-[radial-gradient(ellipse_at_top,#24103d_0%,#0a0a0a_62%)] px-6 py-28 text-white md:px-12 md:py-36">
                <div className="mx-auto max-w-5xl">
                    <h1 className="font-display max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-8xl">
                        {t("heading")}
                    </h1>
                    <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-300">
                        {t("intro")}
                    </p>
                </div>
            </section>

            <ProductionCarousel items={productions} showDetails />
        </>
    );
}
