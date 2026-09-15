import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { OkanLogo } from "@/components/okan-logo";
import { NavDrawer } from "@/components/nav-drawer";
import { ScrollHeader } from "@/components/scroll-header";
import { navLinks } from "@/lib/site";

const base = "/draft-1";

export default async function Draft1Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("landing");
  const c = await getTranslations("contact");

  const links = navLinks.map((l) => ({
    label: t(`nav.${l.key}`),
    href: `${base}${l.path}`,
  }));

  return (
    <div className="relative bg-white text-zinc-900">
      {/* ========================================================================= */}
      {/* BOTÓN DE MENÚ FLOTANTE PARA TODAS LAS PÁGINAS INTERNAS                    */}
      {/* (Se oculta automáticamente en el Home porque el Home tiene su propio header) */}
      {/* ========================================================================= */}
      <ScrollHeader className="top-5 right-6 md:top-8 md:right-12">
        <NavDrawer
          links={links}
          applyLabel={t("nav.apply")}
          applyHref={`${base}/admissions`}
          applyClassName="bg-brand-600 hover:bg-brand-500 text-white"
          homeLabel={t("nav.home")}
          homeHref={base}
          hiddenOnPath={base}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white/80 text-zinc-900 shadow-lg backdrop-blur-sm transition-colors hover:border-brand-600 hover:bg-brand-600 hover:text-white"
        />
      </ScrollHeader>

      {/* ========================================================================= */}
      {/* CONTENIDO PRINCIPAL DE CADA PÁGINA                                        */}
      {/* ========================================================================= */}
      <main className="min-h-screen">{children}</main>

      {/* ========================================================================= */}
      {/* PIE DE PÁGINA GLOBAL (FOOTER CON COLORES OKAN: NEGRO, BLANCO Y MORADO)    */}
      {/* - Ocupa todo el ancho de la pantalla                                      */}
      {/* - Textos modificables en: src/messages/es.json -> "landing.footer" y      */}
      {/*   "contact" (para email, teléfono y dirección)                            */}
      {/* ========================================================================= */}
      <footer className="bg-[linear-gradient(135deg,#000000_0%,#3b0764_55%,#000000_100%)] px-6 py-16 text-zinc-300 md:px-12">
        <div className="flex w-full flex-col gap-12 md:flex-row md:justify-between">
          {/* Columna 1: Logo OKAN y descripción institucional */}
          <div>
            <OkanLogo variant="light" width={130} />
            <p className="mt-4 max-w-xs text-sm">{t("about.text")}</p>
          </div>

          {/* Columnas 2, 3 y 4: Enlaces a Programas, Sobre OKAN y Datos de Contacto */}
          <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
            <div className="flex flex-col gap-3">
              <div className="mb-2 font-semibold text-white">
                {t("nav.programs")}
              </div>
              {links.slice(0, 3).map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-2 font-semibold text-white">
                {t("nav.about")}
              </div>
              {links.slice(3).map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-2 font-semibold text-white">
                {t("nav.contact")}
              </div>
              <span>{c("email")}</span>
              <span>{c("phone")}</span>
              <span>{c("address")}</span>
            </div>
          </div>
        </div>

        {/* Línea divisoria inferior y texto de copyright */}
        <div className="mt-12 w-full border-t border-zinc-800 pt-6 text-xs">
          {t("footer.copyright")}
        </div>
      </footer>
    </div>
  );
}
