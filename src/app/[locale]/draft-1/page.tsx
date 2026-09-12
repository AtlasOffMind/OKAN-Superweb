import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { routing } from "@/i18n/routing";
import { faculty } from "@/lib/faculty";
import ImageMarquee from "@/components/ImageMarquee";
import FacultyCarousel from "@/components/FacultyCarousel";
import { OkanLogo } from "@/components/okan-logo";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { NavDrawer } from "@/components/nav-drawer";
import { navLinks } from "@/lib/site";

const base = "/draft-1";

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

  const links = navLinks.map((link) => ({
    label: t(`nav.${link.key}`),
    href: `${base}${link.path}`,
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <ImageMarquee className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-black/70 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.25),transparent_60%)] bg-[linear-gradient(to_bottom,rgba(10,10,10,0.6),rgba(10,10,10,0.8))]" />
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 md:px-12">
          <Link href={base} aria-label="OKAN Escuela Superior de Arte">
            <OkanLogo variant="light" width={140} />
          </Link>

          <div className="flex items-center gap-3">
            <LocaleSwitcher className="border-white/40 text-white" />
            <Link
              href={`${base}/admissions`}
              className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-brand-100 sm:inline-block"
            >
              {t("nav.apply")}
            </Link>
            <NavDrawer
              links={links}
              applyLabel={t("nav.apply")}
              applyHref={`${base}/admissions`}
              homeLabel={t("nav.home")}
              homeHref={base}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/30 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-zinc-900"
            />
          </div>
        </header>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center md:py-36">
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
      <section>
        <div className="grid md:grid-cols-2">
          {(
            [
              ["acting", "/images/Pograms/Actuacion.jpg"],
              ["dance", "/images/Pograms/Danza.jpg"],
            ] as const
          ).map(([key, image]) => (
            <article
              key={key}
              className="relative flex min-h-[24rem] flex-col justify-end overflow-hidden p-8 md:min-h-[34rem] md:p-12"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <h3
                className={`font-display text-brand-600 absolute top-8 z-10 text-3xl font-semibold tracking-tight md:top-12 md:text-4xl ${key === "dance" ? "right-8 text-right md:right-12" : "left-8 md:left-12"
                  }`}
              >
                {t(`programs.${key}.title`)}
              </h3>
              <div
                className={`relative z-10 max-w-xl ${key === "acting" ? "md:ml-auto md:text-right" : ""
                  }`}
              >
                <p className="mt-5 max-w-xl leading-relaxed text-white/90">
                  {t(`programs.${key}.desc`)}
                </p>
                <Link
                  href={`${base}/programs`}
                  className="text-brand-200 hover:text-white mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                >
                  {t("programs.readMore")}
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="relative min-h-[30rem] overflow-hidden">
        <Image
          src="/images/sobre OKAN/okan-11-2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex min-h-[30rem] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center md:px-12">
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-tight text-white md:text-5xl">
            {t("about.text")}
          </h2>
          <div className="text-brand-300 mt-8 text-xs font-semibold tracking-[0.3em] uppercase">
            {t("about.heading")}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="bg-[radial-gradient(ellipse_at_center,#080808_35%,#100817_72%,#24103d_100%)] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="font-display text-brand-600 text-4xl font-semibold tracking-tight md:text-5xl">
            {t("faculty.heading")}
          </h2>
          <p className="mt-4 max-w-md text-zinc-400">{t("faculty.desc")}</p>
        </div>
        <div className="mt-14 w-full overflow-hidden">
          <FacultyCarousel
            members={faculty}
            locale={locale}
            aboutHref={`${base}/about`}
          />
        </div>
      </section>

      {/* News */}
      <section className="border-y border-brand-200 bg-brand-50 px-6 py-20 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
              {t("news.heading")}
            </div>
            <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight text-zinc-900">
              {t("news.item.title")}
            </h3>
            <p className="mt-3 text-zinc-600">{t("news.item.desc")}</p>
          </div>
          <div className="shrink-0 text-sm font-medium text-zinc-400">
            {t("news.item.date")}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[radial-gradient(ellipse_at_top,#24103d_0%,#0a0a0a_62%)] px-6 py-24 text-center text-white md:px-12">
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {t("footer.ctaTitle")}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-zinc-300">
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
