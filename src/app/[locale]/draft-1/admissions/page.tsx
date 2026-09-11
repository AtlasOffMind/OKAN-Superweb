import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import Image from "next/image";

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
      <section className="relative min-h-[70svh] overflow-hidden bg-zinc-950 text-white">
        <Image
          src="/images/okan-45.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.92),rgba(10,10,10,0.45),rgba(10,10,10,0.7))]" />
        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-end px-6 py-20 md:px-12 md:py-24">
          <p className="text-brand-300 text-sm font-semibold tracking-[0.3em] uppercase">
            {t("eyebrow")}
          </p>
          <h1 className="font-display mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
            {t("heading")}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-200">
            {t("intro")}
          </p>
          <Link
            href="draft-1/contact"
            className="bg-brand-600 hover:bg-brand-500 mt-9 inline-flex w-fit rounded-full px-7 py-3 text-sm font-semibold text-white transition-colors"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="text-brand-600 text-sm font-semibold tracking-[0.25em] uppercase">
              {t("welcome.eyebrow")}
            </p>
            <h2 className="font-display mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              {t("welcome.title")}
            </h2>
          </div>
          <p className="max-w-2xl text-xl leading-relaxed text-zinc-600 md:pt-8">
            {t("welcome.text")}
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-24 text-white md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-brand-300 text-sm font-semibold tracking-[0.25em] uppercase">
            {t("process.eyebrow")}
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {t("process.title")}
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="border-t border-zinc-700 pt-6">
                <div className="font-display text-brand-400 text-2xl font-semibold">
                  0{i + 1}
                </div>
                <h3 className="font-display mt-3 text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 leading-relaxed text-zinc-400">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-zinc-700 pt-10 md:flex-row md:items-center">
            <div className="text-brand-300 text-sm font-semibold tracking-widest uppercase">
              {t("deadlines.title")}
            </div>
            <div className="text-right">
              <div className="font-display text-2xl font-semibold">
                {t("deadlines.item")}
              </div>
              <div className="text-zinc-400">{t("deadlines.date")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-50 px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-brand-600 text-sm font-semibold tracking-[0.25em] uppercase">
              {t("audition.eyebrow")}
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {t("audition.title")}
            </h2>
          </div>
          <p className="leading-relaxed text-zinc-600">{t("audition.text")}</p>
        </div>
      </section>

      <section className="bg-[radial-gradient(ellipse_at_top,#24103d_0%,#0a0a0a_62%)] px-6 py-24 text-center text-white md:px-12">
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {t("cta.title")}
        </h2>
        <Link
          href="draft-1/contact"
          className="bg-brand-600 hover:bg-brand-500 mt-8 inline-block rounded-full px-8 py-3 text-sm font-semibold text-white transition-colors"
        >
          {t("cta.button")}
        </Link>
      </section>
    </>
  );
}
