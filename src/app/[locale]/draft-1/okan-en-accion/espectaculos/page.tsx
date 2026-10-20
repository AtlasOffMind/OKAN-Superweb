import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { routing } from "@/i18n/routing";
import { ShowGallery } from "@/components/ShowGallery";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft1Espectaculos({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("okanEnAccion.espectaculos");

    return (
        <>
            <section aria-label={t("heading")} className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-zinc-950">
                <h1 className="sr-only">{t("heading")}</h1>
                <Image
                    src="/images/OKAN%20en%20accion/Shows/1.jpg"
                    alt={t("heroImageAlt")}
                    fill
                    priority
                    sizes="100vw"
                    aria-hidden="true"
                    className="scale-110 object-cover opacity-70 blur-md"
                />
                <Image
                    src="/images/OKAN%20en%20accion/Shows/1.jpg"
                    alt={t("heroImageAlt")}
                    width={1920}
                    height={1080}
                    priority
                    sizes="100vw"
                    className="relative z-10 max-h-[100svh] w-full object-contain"
                />
            </section>

            <ShowGallery
                galleryTitle={t("galleryTitle")}
                imageAltPrefix={t("galleryTitle")}
                expandLabel={t("expandImage")}
                closeLabel={t("closeImage")}
            />

            <section className="bg-brand-950 px-6 py-20 text-white md:px-12 md:py-28">
                <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 border-t border-white/20 pt-10 sm:flex-row sm:items-end">
                    <h2 className="font-display max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
                        {t("catalogTitle")}
                    </h2>
                    <div className="flex shrink-0 flex-col items-start gap-3">
                        <a
                            href="/Pdfs/OKAN%20%281%29_compressed%20%281%29.pdf"
                            download="CATALOGO OKAN ESPECTACULO.pdf"
                            className="bg-brand-500 text-zinc-950 px-6 py-4 text-sm font-bold transition-colors hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            {t("catalogDownload")}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
