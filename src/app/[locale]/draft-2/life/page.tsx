import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft2Life({
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
      <section className="bg-brand-700 px-6 py-16 text-white md:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
            {t("heading")}
          </h1>
          <p className="text-brand-100 mt-4 max-w-2xl text-lg">{t("intro")}</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="hover:border-brand-300 hover:shadow-brand-100 rounded-3xl border border-zinc-200 p-8 transition-all hover:shadow-lg"
            >
              <div className="bg-brand-100 font-display text-brand-700 flex h-10 w-10 items-center justify-center rounded-xl text-lg font-semibold">
                {i + 1}
              </div>
              <h2 className="font-display mt-5 text-2xl font-semibold">
                {f.title}
              </h2>
              <p className="mt-3 leading-relaxed text-zinc-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
