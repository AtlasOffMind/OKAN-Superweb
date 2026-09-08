import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft3Admissions({
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
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-semibold italic">
            {t("process.title")}
          </h2>
          <div className="mt-14 flex flex-col">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="grid gap-4 border-t border-zinc-800 py-8 md:grid-cols-4"
              >
                <div className="font-display text-brand-500 text-2xl italic">
                  0{i + 1}
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display text-3xl font-semibold italic">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-zinc-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-2xl border border-zinc-800 p-8 md:flex-row md:items-center">
            <div className="text-brand-400 text-sm tracking-widest uppercase">
              {t("deadlines.title")}
            </div>
            <div className="text-right">
              <div className="font-display text-3xl font-semibold italic">
                {t("deadlines.item")}
              </div>
              <div className="text-zinc-500">{t("deadlines.date")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 text-center md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(147,51,234,0.35),transparent_70%)]" />
        <h2 className="font-display relative text-5xl font-semibold italic md:text-7xl">
          {t("cta.title")}
        </h2>
        <Link
          href="/draft-3/contact"
          className="relative mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-zinc-900 transition-opacity hover:opacity-90"
        >
          {t("cta.button")}
        </Link>
      </section>
    </>
  );
}
