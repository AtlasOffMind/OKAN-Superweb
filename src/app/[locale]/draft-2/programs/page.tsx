import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft2Programs({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("programs");

  return (
    <>
      <section className="bg-brand-700 px-6 py-16 text-white md:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
            {t("heading")}
          </h1>
          <p className="text-brand-100 mt-4 max-w-2xl text-lg">{t("intro")}</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {(["acting", "dance", "creation"] as const).map((key, i) => (
            <div
              key={key}
              className="hover:border-brand-300 hover:shadow-brand-100 rounded-3xl border border-zinc-200 p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-brand-700 font-display flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-semibold text-white">
                {i + 1}
              </div>
              <h2 className="font-display mt-6 text-3xl font-semibold">
                {t(`${key}.title`)}
              </h2>
              <p className="text-brand-600 mt-1 text-sm font-semibold tracking-wide uppercase">
                {t(`${key}.tagline`)}
              </p>
              <p className="mt-5 leading-relaxed text-zinc-500">
                {t(`${key}.desc`)}
              </p>
              <ul className="mt-6 flex flex-col gap-2 text-sm text-zinc-600">
                {t.raw(`${key}.outcomes`).map((o: string) => (
                  <li key={o}>✓ {o}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
