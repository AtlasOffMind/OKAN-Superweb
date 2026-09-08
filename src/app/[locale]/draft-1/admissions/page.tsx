import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft1Admissions({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("admissions");

  const steps = t.raw("process.steps") as { title: string; desc: string }[];

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
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            {t("process.title")}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="border-t border-zinc-200 pt-6">
                <div className="font-display text-brand-600 text-2xl font-semibold">
                  0{i + 1}
                </div>
                <h3 className="font-display mt-3 text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 leading-relaxed text-zinc-500">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-zinc-200 pt-10 md:flex-row md:items-center">
            <div className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
              {t("deadlines.title")}
            </div>
            <div className="text-right">
              <div className="font-display text-2xl font-semibold">
                {t("deadlines.item")}
              </div>
              <div className="text-zinc-500">{t("deadlines.date")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-20 text-center md:px-12">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {t("cta.title")}
        </h2>
        <Link
          href="/draft-1/contact"
          className="bg-brand-600 hover:bg-brand-500 mt-8 inline-block rounded-full px-8 py-3 text-sm font-semibold text-white transition-colors"
        >
          {t("cta.button")}
        </Link>
      </section>
    </>
  );
}
