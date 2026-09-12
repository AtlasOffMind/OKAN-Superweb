import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
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
    { key: "acting", image: "/images/Pograms/Actuacion.jpg" },
    { key: "dance", image: "/images/Pograms/Danza.jpg" },
  ] as const;

  return (
    <>
      <section className="bg-[radial-gradient(ellipse_at_top,#24103d_0%,#0a0a0a_62%)] px-6 py-28 text-white md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-brand-300 text-sm font-semibold tracking-[0.3em] uppercase">
            {t("eyebrow")}
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-6xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
            {t("heading")}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-300">
            {t("intro")}
          </p>
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-2">
          {careers.map(({ key, image }) => (
            <article key={key} className="group relative overflow-hidden bg-zinc-950 text-white">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/65" />
                <h2 className="font-display text-brand-600 absolute top-7 left-7 z-10 max-w-[90%] text-7xl font-semibold leading-[0.85] tracking-tight drop-shadow-[0_3px_16px_rgba(0,0,0,0.65)] md:top-60 md:left-12 md:text-9xl">
                  {t(`${key}.title`)}
                </h2>
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-12">
                  <p className="mt-5 text-base font-medium tracking-[0.12em] text-white uppercase md:text-lg">
                    {t(`${key}.tagline`)}
                  </p>
                </div>
              </div>
              <div className="grid gap-10 border-t border-zinc-800 p-7 md:grid-cols-[1.2fr_0.8fr] md:p-12">
                <p className="text-lg leading-[1.7] text-white md:text-xl">
                  {t(`${key}.desc`)}
                </p>
                <ul className="flex flex-col gap-5 text-base leading-relaxed text-zinc-200 md:text-lg">
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

      <section className="bg-brand-50 px-6 py-24 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-brand-600 text-sm font-semibold tracking-[0.25em] uppercase">
              {t("cta.eyebrow")}
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              {t("cta.title")}
            </h2>
          </div>
          <Link
            href="draft-1/admissions"
            className="bg-brand-600 hover:bg-brand-500 rounded-full px-7 py-3 text-sm font-semibold text-white transition-colors"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}
