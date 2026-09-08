import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft3News({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("news");

  const items = t.raw("items") as {
    date: string;
    title: string;
    desc: string;
  }[];

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
        <div className="mx-auto flex max-w-6xl flex-col">
          {items.map((n) => (
            <article
              key={n.title}
              className="grid gap-4 border-b border-zinc-800 py-10 md:grid-cols-4"
            >
              <div className="text-sm text-zinc-500">{n.date}</div>
              <div className="md:col-span-3">
                <h2 className="font-display text-3xl font-semibold tracking-tight italic md:text-4xl">
                  {n.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-zinc-400">
                  {n.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
