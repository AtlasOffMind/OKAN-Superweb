import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft3Life({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("life");

  const features = t.raw("features") as { title: string; desc: string }[];

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
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="hover:border-brand-600 rounded-2xl border border-zinc-800 p-8 transition-colors"
            >
              <h2 className="font-display text-3xl font-semibold italic">
                {f.title}
              </h2>
              <p className="mt-3 text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
