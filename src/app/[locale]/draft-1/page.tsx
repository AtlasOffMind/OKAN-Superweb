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
import { ScrollHeader } from "@/components/scroll-header";
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

  const links = navLinks.map((link) =>
    link.children
      ? {
        label: t(`nav.${link.key}`),
        children: link.children.map((child) => ({
          label: t(`nav.${link.key}Items.${child.key}`),
          href: `${base}${child.path}`,
        })),
      }
      : {
        label: t(`nav.${link.key}`),
        href: `${base}${link.path}`,
      },
  );

  return (
    <>
      {/* ========================================================================= */}
      {/* SECCIÓN 1: HERO (PORTADA PRINCIPAL CON CARRUSEL DE FOTOS EN MOVIMIENTO)   */}
      {/* - Cabecera fija que sube y baja con el scroll (Logo, Idioma, Aplicar, Menú) */}
      {/* - Textos modificables en: src/messages/es.json -> "landing.hero"          */}
      {/* - Fotos del fondo modificables en: src/components/ImageMarquee.tsx        */}
      {/* ========================================================================= */}
      <section className="relative min-h-[100svh] overflow-hidden">
        {/* Fondo con carrusel infinito de imágenes */}
        <ImageMarquee className="absolute inset-0 w-full h-full" />

        {/* Capa oscura superpuesta con degradado morado */}
        <div className="absolute inset-0 bg-black/70 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.25),transparent_60%)] bg-[linear-gradient(to_bottom,rgba(10,10,10,0.6),rgba(10,10,10,0.8))]" />

        {/* Barra superior de navegación (Header inteligente con scroll) */}
        <ScrollHeader
          className="inset-x-0 top-0 flex items-center justify-between px-6 py-5 md:px-12"
          scrolledClassName="bg-zinc-950/90 shadow-lg shadow-black/30 backdrop-blur-md"
        >
          {/* Logo OKAN a la izquierda */}
          <Link href={base} aria-label="OKAN Escuela Superior de Arte">
            <OkanLogo variant="light" width={140} />
          </Link>

          {/* Controles a la derecha: Selector de Idioma (ES/EN), Botón Aplicar y Botón de Menú */}
          <div className="flex items-center gap-3">
            <LocaleSwitcher className="border-white/40 text-white" />
            <Link
              href={`${base}/admissions`}
              className="bg-brand-600 hover:bg-brand-500 hidden rounded-full px-5 py-2 text-sm font-medium text-white transition-colors sm:inline-block"
            >
              {t("nav.apply")}
            </Link>
            <NavDrawer
              links={links}
              applyLabel={t("nav.apply")}
              applyHref={`${base}/admissions`}
              applyClassName="bg-brand-600 hover:bg-brand-500 text-white"
              homeLabel={t("nav.home")}
              homeHref={base}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/30 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-zinc-900"
            />
          </div>
        </ScrollHeader>

        {/* Textos centrales del Hero y botones de acción principal */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center md:py-36">
          <div className="flex items-center justify-center">
            <OkanLogo variant="light" width={300} />
          </div>
          <h1 className="font-display mt-6 text-5xl leading-[1.05] font-semibold tracking-tight text-white md:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`${base}/admissions`}
              className="hover:bg-brand-100 rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 transition-colors"
            >
              {t("hero.primary")}
            </Link>
            <Link
              href={`${base}/programs`}
              className="rounded-full border border-zinc-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              {t("hero.secondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 2: PROGRAMAS / CARRERAS (3 BLOQUES: ACTUACIÓN, DANZA, ESTUDIOS)   */}
      {/* - Fotos de fondo en: public/images/Pograms/ y public/images/okan-51.jpg   */}
      {/* - Textos modificables en: src/messages/es.json -> "landing.programs"      */}
      {/* ========================================================================= */}
      <section>
        <div className="grid md:grid-cols-3">
          {/* Bloques 1 y 2: Actuación y Danza con sus fotos de fondo */}
          {(
            [
              ["acting", "/images/Pograms/Actuacion.jpg"],
              ["dance", "/images/Pograms/Danza.jpg"],
            ] as const
          ).map(([key, image]) => (
            <article
              key={key}
              className="relative flex aspect-[3/4] flex-col justify-end overflow-hidden p-8 md:aspect-[4/5] md:p-12"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <h3
                className={`font-display text-brand-600 absolute top-8 z-10 text-5xl font-semibold tracking-tight md:top-12 md:text-7xl ${key === "dance" ? "inset-x-0 text-center" : "left-8 md:left-12"
                  }`}
              >
                {t(`programs.${key}.title`)}
              </h3>
              <div
                className={`relative z-10 max-w-xl ${key === "acting" ? "md:ml-auto md:text-right" : "mx-auto text-center"
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

          {/* Bloque 3: Estudios Continuos */}
          <article className="relative flex aspect-[3/4] flex-col justify-end overflow-hidden p-8 md:aspect-[4/5] md:p-12">
            <Image
              src="/images/Pograms/Estudios_Continuos.jpeg"
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <h3 className="font-display text-brand-600 absolute top-8 right-8 z-10 text-right text-5xl font-semibold tracking-tight md:top-12 md:right-12 md:text-7xl">
              {t("programs.continuingEd.title")}
            </h3>
            <div className="relative z-10 ml-auto max-w-xl text-left">
              <p className="mt-5 max-w-xl leading-relaxed text-white/90">
                {t("programs.continuingEd.desc")}
              </p>
              <Link
                href={`${base}/programs`}
                className="text-brand-200 hover:text-white mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              >
                {t("programs.continuingEd.cta")}
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 3: SOBRE OKAN (MANIFIESTO INSTITUCIONAL CON FOTO DE FONDO)       */}
      {/* - Foto de fondo en: public/images/sobre OKAN/okan-11-2.jpg                */}
      {/* - Textos modificables en: src/messages/es.json -> "landing.about"         */}
      {/* ========================================================================= */}
      <section className="relative aspect-[4/3] overflow-hidden">
        <Image
          src="/images/sobre OKAN/Collage1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-5 py-6 text-center sm:px-6 sm:py-10 md:px-12 md:py-24">
          <h2 className="font-display text-3xl leading-[0.98] font-semibold tracking-tight text-white sm:text-5xl md:text-7xl">
            {(t.raw("about.text") as string[])[0]}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-300 sm:mt-6 sm:text-xl md:text-2xl">
            {(t.raw("about.text") as string[])[1]}
          </p>
          <Link
            href={`${base}/admissions`}
            className="bg-brand-600 hover:bg-brand-500 mt-5 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-colors sm:mt-8 sm:px-8 sm:py-3"
          >
            {t("footer.ctaButton")}
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 4: NUESTRO CLAUSTRO (CARRUSEL INTERACTIVO DE PROFESORES)          */}
      {/* - Datos, fotos y biografías en: src/lib/faculty.ts                        */}
      {/* - Componente del carrusel en: src/components/FacultyCarousel.tsx          */}
      {/* ========================================================================= */}
      <section className="bg-[radial-gradient(ellipse_at_center,#080808_35%,#100817_72%,#24103d_100%)] pt-24 pb-16 text-white">
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

      {/* ========================================================================= */}
      {/* SECCIÓN 5: AGENDA Y NOTICIAS (CONVOCATORIA ACTUAL / AUDICIONES)           */}
      {/* - Fondo oscuro continuo que fluye hacia el footer                         */}
      {/* - Textos modificables en: src/messages/es.json -> "landing.news"          */}
      {/* ========================================================================= */}
      <section className="bg-[radial-gradient(ellipse_at_center,#080808_35%,#100817_72%,#24103d_100%)] px-6 py-24 text-white md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 border-t border-zinc-800/80 pt-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-brand-300 text-sm font-semibold tracking-widest uppercase">
              {t("news.heading")}
            </div>
            <h3 className="font-display mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              {t("news.item.title")}
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-zinc-300">
              {t("news.item.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 6: LLAMADO A LA ACCIÓN FINAL (DA EL SIGUIENTE PASO / CTA)         */}
      {/* - Botón 'Aplica ahora' que dirige a Admisiones                            */}
      {/* - Botón 'Conoce OKAN' que dirige a Programas                              */}
      {/* - Textos modificables en: src/messages/es.json -> "landing.footer"        */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#080808_35%,#100817_72%,#24103d_100%)] px-6 pt-16 pb-32 text-center text-white md:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.22),transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <h2 className="font-display text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
            {t("footer.ctaTitle")}
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-xl text-zinc-300">
            {t("footer.ctaText")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={`${base}/admissions`}
              className="bg-brand-600 hover:bg-brand-500 rounded-full px-9 py-4 text-base font-semibold text-white transition-colors"
            >
              {t("footer.ctaButton")}
            </Link>
            <Link
              href={`${base}/programs`}
              className="rounded-full border border-white/40 px-9 py-4 text-base font-semibold text-white transition-colors hover:border-white"
            >
              {t("footer.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
