import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft3Programs({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("programs");

  return (
    <>
      <section className="relative overflow-hidden px-6 py-20 md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(147,51,234,0.25),transparent_70%)]" />
        <div className="relative mx-auto max-w-6xl">
          <h1 className="font-display text-6xl leading-none font-semibold tracking-tight italic md:text-8xl">
            {t("heading")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">{t("intro")}</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-16">
          {(["acting", "dance", "creation"] as const).map((key, i) => (
            <div
              key={key}
              className="grid gap-6 border-b border-zinc-800 pb-12 md:grid-cols-3"
            >
              <div className="font-display text-brand-500 text-3xl italic">
                0{i + 1}
              </div>
              <div className="md:col-span-2">
                <h2 className="font-display text-4xl font-semibold tracking-tight italic md:text-6xl">
                  {t(`${key}.title`)}
                </h2>
                <p className="font-display text-brand-300 mt-2 italic">
                  {t(`${key}.tagline`)}
                </p>
                <p className="mt-6 leading-relaxed text-zinc-400">
                  {t(`${key}.desc`)}
                </p>
                <ul className="mt-6 flex flex-col gap-2 text-sm text-zinc-500">
                  {t.raw(`${key}.outcomes`).map((o: string) => (
                    <li key={o}>+ {o}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
