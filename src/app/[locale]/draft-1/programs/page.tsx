import { getTranslations, setRequestLocale } from "next-intl/server";
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

  return (
    <>
      <section className="border-b border-zinc-200 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
            {t("heading")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-500">{t("intro")}</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-16">
          {(["acting", "dance", "creation"] as const).map((key, i) => (
            <div
              key={key}
              className="grid gap-8 border-t border-zinc-200 pt-10 md:grid-cols-3"
            >
              <div className="font-display text-brand-600 text-2xl font-semibold">
                0{i + 1}
              </div>
              <div>
                <h2 className="font-display text-4xl font-semibold tracking-tight">
                  {t(`${key}.title`)}
                </h2>
                <p className="mt-2 text-sm font-medium tracking-wide text-zinc-400 uppercase">
                  {t(`${key}.tagline`)}
                </p>
                <p className="mt-6 leading-relaxed text-zinc-500">
                  {t(`${key}.desc`)}
                </p>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-zinc-600">
                {t.raw(`${key}.outcomes`).map((o: string) => (
                  <li key={o} className="flex items-start gap-2">
                    <span className="bg-brand-600 mt-2 h-1 w-1 shrink-0 rounded-full" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
