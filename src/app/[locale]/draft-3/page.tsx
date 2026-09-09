import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { routing } from "@/i18n/routing";
import { leaders } from "@/lib/leaders";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft3Home({
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
      <section className="relative overflow-hidden px-6 py-24 text-center md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.35),transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl">
          <p className="font-display text-brand-300 text-sm tracking-wide italic">
            {t("hero.eyebrow")}
          </p>
          <h1 className="via-brand-300 to-brand-500 font-display mt-6 bg-gradient-to-r from-white bg-clip-text text-6xl leading-[0.95] font-semibold tracking-tight text-transparent italic md:text-8xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
href="draft-3/admissions"
              className="from-brand-500 to-brand-700 shadow-brand-900/50 rounded-full bg-gradient-to-r px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
            >
              {t("hero.primary")}
            </Link>
            <Link
              href="draft-3/programs"
              className="hover:border-brand-400 rounded-full border border-zinc-700 px-8 py-3.5 text-sm font-semibold text-zinc-200 transition-colors"
            >
              {t("hero.secondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="border-t border-zinc-800 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-5xl font-semibold tracking-tight italic md:text-7xl">
            {t("programs.heading")}
          </h2>
          <p className="mt-4 max-w-md text-zinc-400">
            {t("programs.subheading")}
          </p>
          <div className="mt-16 flex flex-col">
            {(
              [
                ["01", "acting"],
                ["02", "dance"],
                ["03", "creation"],
              ] as const
            ).map(([num, key]) => (
              <div
                key={key}
                className="group hover:bg-brand-950/40 flex flex-col gap-2 border-b border-zinc-800 py-8 transition-colors md:flex-row md:items-baseline md:gap-10"
              >
                <div className="font-display text-brand-500 text-xl italic md:w-16">
                  {num}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-4xl font-semibold italic transition-transform group-hover:translate-x-2 md:text-5xl">
                    {t(`programs.${key}.title`)}
                  </h3>
                </div>
                <p className="max-w-sm text-zinc-400">
                  {t(`programs.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="border-t border-zinc-800 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-5xl font-semibold tracking-tight italic md:text-6xl">
            {t("faculty.heading")}
          </h2>
          <p className="mt-4 max-w-md text-zinc-400">{t("faculty.desc")}</p>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {leaders.map((l, i) => (
              <div
                key={l.name}
                className={i % 2 === 1 ? "md:translate-y-8" : ""}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-zinc-800">
                  <Image
                    src={l.file}
                    alt={l.name}
                    fill
                    className="object-cover opacity-90 grayscale-[40%] transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
                <div className="font-display mt-3 text-lg italic">{l.name}</div>
                <div className="text-brand-300 text-sm">
                  {locale === "es" ? l.es : l.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="border-t border-zinc-800 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-brand-400 text-sm tracking-widest uppercase">
            {t("news.heading")}
          </div>
          <h3 className="font-display mt-6 max-w-3xl text-4xl leading-tight font-semibold tracking-tight italic md:text-6xl">
            {t("news.item.title")}
          </h3>
          <p className="mt-6 max-w-xl text-zinc-400">{t("news.item.desc")}</p>
          <div className="mt-4 text-sm text-zinc-500">
            {t("news.item.date")}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-zinc-800 px-6 py-28 text-center md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(147,51,234,0.4),transparent_70%)]" />
        <h2 className="font-display relative text-6xl leading-none font-semibold tracking-tight italic md:text-8xl">
          {t("footer.ctaTitle")}
        </h2>
        <Link
          href="draft-3/admissions"
          className="relative mt-10 inline-block rounded-full bg-white px-9 py-4 text-sm font-bold text-zinc-900 transition-opacity hover:opacity-90"
        >
          {t("footer.ctaButton")}
        </Link>
      </section>
    </>
  );
}
