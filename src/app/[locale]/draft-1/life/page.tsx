import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft1Life({
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
      <section className="border-b border-zinc-200 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
            {t("heading")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-500">{t("intro")}</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-10">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
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
