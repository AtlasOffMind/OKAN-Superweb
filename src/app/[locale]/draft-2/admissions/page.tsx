import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft2Admissions({
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
      <section className="bg-brand-700 px-6 py-16 text-white md:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
            {t("heading")}
          </h1>
          <p className="text-brand-100 mt-4 max-w-2xl text-lg">{t("intro")}</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            {t("process.title")}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-zinc-200 p-6"
              >
                <div className="bg-brand-100 font-display text-brand-700 flex h-10 w-10 items-center justify-center rounded-xl text-lg font-semibold">
                  {i + 1}
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-zinc-500">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-2xl bg-zinc-50 p-8 md:flex-row md:items-center">
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

      <section className="bg-brand-950 px-6 py-20 text-center text-white md:px-12">
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {t("cta.title")}
        </h2>
        <Link
          href="draft-2/contact"
          className="bg-brand-600 hover:bg-brand-500 mt-8 inline-block rounded-xl px-8 py-3 text-sm font-semibold text-white transition-colors"
        >
          {t("cta.button")}
        </Link>
      </section>
    </>
  );
}
