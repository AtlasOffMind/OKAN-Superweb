import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft1News({
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
      <section className="border-b border-zinc-200 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
            {t("heading")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-500">{t("intro")}</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col">
          {items.map((n) => (
            <article
              key={n.title}
              className="grid gap-4 border-b border-zinc-200 py-10 md:grid-cols-4"
            >
              <div className="text-sm text-zinc-400">{n.date}</div>
              <div className="md:col-span-3">
                <h2 className="font-display text-3xl font-semibold tracking-tight">
                  {n.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-zinc-500">
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
