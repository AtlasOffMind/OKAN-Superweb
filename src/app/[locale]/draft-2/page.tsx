import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { routing } from "@/i18n/routing";
import { OkanLogo } from "@/components/okan-logo";
import { leaders } from "@/lib/leaders";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft2({
  params,
}: {
  params: Promise<{ locale: (typeof routing.locales)[number] }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("landing");
  const other = locale === "es" ? "en" : "es";

  return (
    <div className="bg-white text-zinc-900">
      {/* Top bar */}
      <div className="bg-brand-700 px-6 py-2 text-center text-xs font-medium tracking-wide text-white md:px-12">
        {t("news.item.title")} — {t("news.item.date")}
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 md:px-12">
        <Link href="/">
          <OkanLogo width={140} height={56} />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-700 md:flex">
          <span className="hover:text-brand-700 cursor-pointer">
            {t("nav.programs")}
          </span>
          <span className="hover:text-brand-700 cursor-pointer">
            {t("nav.admissions")}
          </span>
          <span className="hover:text-brand-700 cursor-pointer">
            {t("nav.life")}
          </span>
          <span className="hover:text-brand-700 cursor-pointer">
            {t("nav.about")}
          </span>
          <Link
            href="/draft-2"
            locale={other}
            className="text-brand-600 text-xs font-semibold tracking-widest uppercase"
          >
            {other.toUpperCase()}
          </Link>
        </nav>
        <a
          href="#apply"
          className="bg-brand-700 hover:bg-brand-800 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-colors"
        >
          {t("nav.apply")}
        </a>
      </header>

      {/* Hero — asymmetric */}
      <section className="relative grid min-h-[70vh] items-center gap-8 px-6 md:grid-cols-2 md:px-12">
        <div className="relative z-10">
          <p className="border-brand-200 bg-brand-50 text-brand-700 inline-block rounded-full border px-3 py-1 text-xs font-semibold">
            {t("hero.eyebrow")}
          </p>
          <h1 className="font-display mt-6 text-5xl leading-[1.02] font-semibold tracking-tight md:text-6xl">
            {t("hero.title")}
            <span className="text-brand-600">.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-500">
            {t("hero.subtitle")}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#apply"
              className="bg-brand-700 hover:bg-brand-800 rounded-xl px-7 py-3 text-sm font-semibold text-white transition-colors"
            >
              {t("hero.primary")}
            </a>
            <a
              href="#programs"
              className="hover:border-brand-400 hover:text-brand-700 rounded-xl border border-zinc-300 px-7 py-3 text-sm font-semibold text-zinc-800 transition-colors"
            >
              {t("hero.secondary")}
            </a>
          </div>
        </div>
        <div className="from-brand-700 via-brand-500 to-brand-300 relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
          <p className="font-display absolute bottom-8 left-8 text-6xl font-semibold text-white/95">
            OKAN
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-200 bg-zinc-50 px-6 py-10 md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[
            ["15+", "years"],
            ["400+", "students"],
            ["800+", "alumni"],
            ["40+", "productions"],
          ].map(([n, key]) => (
            <div key={key}>
              <div className="font-display text-brand-700 text-4xl font-semibold">
                {n}
              </div>
              <div className="mt-1 text-sm text-zinc-500">
                {t(`stats.${key}`)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs — cards */}
      <section id="programs" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {t("programs.heading")}
          </h2>
          <p className="mt-3 max-w-md text-zinc-500">
            {t("programs.subheading")}
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {(["acting", "dance", "creation"] as const).map((key, i) => (
              <div
                key={key}
                className="group hover:border-brand-300 hover:shadow-brand-100 rounded-3xl border border-zinc-200 p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="bg-brand-700 font-display flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-semibold text-white">
                  {i + 1}
                </div>
                <h3 className="font-display mt-6 text-2xl font-semibold">
                  {t(`programs.${key}.title`)}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-500">
                  {t(`programs.${key}.desc`)}
                </p>
                <div className="text-brand-700 mt-6 text-sm font-semibold group-hover:underline">
                  {t("nav.admissions")} →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="bg-brand-950 px-6 py-24 text-white md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {t("faculty.heading")}
            </h2>
            <p className="text-brand-200 max-w-sm">{t("faculty.desc")}</p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {leaders.map((l) => (
              <div key={l.name}>
                <div className="bg-brand-900 relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={l.file}
                    alt={l.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="font-display mt-4 text-lg font-semibold">
                  {l.name}
                </div>
                <div className="text-brand-300 text-sm">
                  {locale === "es" ? l.es : l.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
            {t("news.heading")}
          </div>
          <div>
            <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {t("news.item.title")}
            </h3>
            <p className="mt-4 leading-relaxed text-zinc-500">
              {t("news.item.desc")}
            </p>
            <div className="mt-4 text-sm text-zinc-400">
              {t("news.item.date")}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer
        id="apply"
        className="bg-brand-700 px-6 py-20 text-white md:px-12"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-tight">
              {t("footer.ctaTitle")}
            </h2>
            <p className="text-brand-100 mt-3 max-w-md">
              {t("footer.ctaText")}
            </p>
          </div>
          <a
            href="#apply"
            className="text-brand-700 hover:bg-brand-50 rounded-xl bg-white px-8 py-3 text-sm font-semibold transition-colors"
          >
            {t("footer.ctaButton")}
          </a>
        </div>
        <p className="text-brand-200 mt-14 text-xs">{t("footer.copyright")}</p>
      </footer>
    </div>
  );
}
