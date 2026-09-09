import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { routing } from "@/i18n/routing";
import { leaders } from "@/lib/leaders";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft1Home({
  params,
}: {
  params: Promise<{ locale: (typeof routing.locales)[number] }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("landing");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950 px-6 py-28 text-center md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.25),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-brand-400 font-sans text-xs font-semibold tracking-[0.3em] uppercase">
            {t("hero.eyebrow")}
          </p>
          <h1 className="font-display mt-6 text-5xl leading-[1.05] font-semibold tracking-tight text-white md:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="draft-1/admissions"
              className="hover:bg-brand-100 rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 transition-colors"
            >
              {t("hero.primary")}
            </Link>
            <Link
              href="draft-1/programs"
              className="rounded-full border border-zinc-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              {t("hero.secondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {t("programs.heading")}
            </h2>
            <p className="max-w-xs text-zinc-500">{t("programs.subheading")}</p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {(
              [
                ["01", "acting"],
                ["02", "dance"],
                ["03", "creation"],
              ] as const
            ).map(([num, key]) => (
              <div key={key} className="border-t border-zinc-200 pt-6">
                <div className="text-brand-600 font-sans text-sm font-semibold">
                  {num}
                </div>
                <h3 className="font-display mt-3 text-2xl font-semibold">
                  {t(`programs.${key}.title`)}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-500">
                  {t(`programs.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-zinc-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
            {t("about.text")}
          </h2>
          <div className="text-brand-600 mt-8 text-xs font-semibold tracking-[0.3em] uppercase">
            {t("about.heading")}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {t("faculty.heading")}
          </h2>
          <p className="mt-4 max-w-md text-zinc-500">{t("faculty.desc")}</p>
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {leaders.map((l) => (
              <div key={l.name}>
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                  <Image
                    src={l.file}
                    alt={l.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="font-display mt-4 text-lg font-semibold">
                  {l.name}
                </div>
                <div className="text-sm text-zinc-500">
                  {locale === "es" ? l.es : l.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="border-y border-zinc-200 px-6 py-20 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
              {t("news.heading")}
            </div>
            <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight">
              {t("news.item.title")}
            </h3>
            <p className="mt-3 text-zinc-500">{t("news.item.desc")}</p>
          </div>
          <div className="shrink-0 text-sm font-medium text-zinc-400">
            {t("news.item.date")}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center md:px-12">
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {t("footer.ctaTitle")}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-zinc-500">
          {t("footer.ctaText")}
        </p>
        <Link
          href="draft-1/admissions"
          className="bg-brand-600 hover:bg-brand-500 mt-9 inline-block rounded-full px-8 py-3 text-sm font-semibold text-white transition-colors"
        >
          {t("footer.ctaButton")}
        </Link>
      </section>
    </>
  );
}
