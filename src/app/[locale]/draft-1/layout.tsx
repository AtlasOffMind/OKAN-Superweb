import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { OkanLogo } from "@/components/okan-logo";
import { NavDrawer } from "@/components/nav-drawer";
import { ScrollHeader } from "@/components/scroll-header";
import { LocaleSwitcher } from "@/components/locale-switcher";
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

  const links = navLinks.map((l) =>
    l.children
      ? {
        label: t(`nav.${l.key}`),
        children: l.children.map((child) => ({
          label: t(`nav.${l.key}Items.${child.key}`),
          href: `${base}${child.path}`,
        })),
      }
      : {
        label: t(`nav.${l.key}`),
        href: `${base}${l.path}`,
      },
  );

  // Enlaces planos (sin agrupar) para las columnas del footer
  const flatLinks = navLinks.flatMap((l) =>
    l.children
      ? l.children.map((child) => ({
        label: t(`nav.${l.key}Items.${child.key}`),
        href: `${base}${child.path}`,
      }))
      : [{ label: t(`nav.${l.key}`), href: `${base}${l.path}` }],
  );

  return (
    <div className="relative bg-white text-zinc-900">
      {/* ========================================================================= */}
      {/* BOTÓN DE MENÚ FLOTANTE PARA TODAS LAS PÁGINAS INTERNAS                    */}
      {/* (Se oculta automáticamente en el Home porque el Home tiene su propio header) */}
      {/* ========================================================================= */}
      <ScrollHeader className="top-5 right-6 flex items-center gap-2 md:top-8 md:right-12">
        <LocaleSwitcher hiddenOnPath={base} />
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
          <div className="max-w-xs">
            <OkanLogo variant="light" width={130} />
            <p className="mt-4 max-w-xs text-sm">
              {(t.raw("about.text") as string[])[0]}
              {(t.raw("about.text") as string[])[1]}
            </p>
          </div>

          {/* Columnas 2, 3 y 4: Enlaces a Programas, OKAN en acción y Datos de Contacto */}
          <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 md:gap-x-3">
            <div className="flex flex-col gap-3">
              <div className="mb-2 font-semibold text-white">
                {t("footer.col1")}
              </div>
              {flatLinks.slice(0, 2).map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-2 font-semibold text-white">
                {t("footer.col2")}
              </div>
              {flatLinks.slice(2, 7).map((l) => (
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
              <a
                href="https://wa.me/529987863254"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {c("phone")}
              </a>
              <a
                href="https://maps.app.goo.gl/7wLKmtZdfjkE22eh6"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {c("address")}
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria inferior, redes sociales y texto de copyright */}
        <div className="mt-12 flex w-full flex-col gap-6 border-t border-zinc-800 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {t("footer.copyright")} · {" "}
            <Link
              href={`${base}/privacy-policy`}
              className="underline hover:text-white">
              {t("footer.privacy")}
            </Link>
            <br />
            Fotografía: <a href="https://www.instagram.com/elquerer_fotografia.cancun?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" className="underline hover:text-white">Anyel</a>
            <br />
            Diseño web: <a href="https://drive.google.com/file/d/1aqxzIr1QwrClFO0VCvbTVxc2xCTL-YFm/view?usp=sharing" className="underline hover:text-white">Gerardo</a>
          </p>

          {/* Botones de redes sociales */}
          {/* PENDIENTE: reemplazar los "#" de abajo por los links reales de OKAN en LinkedIn, TikTok y YouTube */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/529987863254"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-zinc-400 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.26 4.9L2 22l5.25-1.38A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.2a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31A8.18 8.18 0 1 1 20.22 12a8.19 8.19 0 0 1-8.18 8.2zm4.5-6.13c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-zinc-400 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.83v2.05h.05c.53-1 1.85-2.05 3.8-2.05C19.8 8 21 10.02 21 13.3V23h-4v-8.7c0-2.08-.04-4.75-2.9-4.75-2.9 0-3.35 2.27-3.35 4.6V23H7V8z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@escueladearteokan?_r=1&_t=ZS-99ni5B27cVp"
              aria-label="TikTok"
              className="text-zinc-400 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M16.6 5.82c-1.02-.86-1.6-2.05-1.6-3.32h-3.15v13.6c0 1.55-1.26 2.8-2.8 2.8a2.8 2.8 0 1 1 0-5.6c.29 0 .57.04.83.13V10.4a5.94 5.94 0 0 0-.83-.06 5.96 5.96 0 1 0 5.96 5.96V9.4a8.02 8.02 0 0 0 4.6 1.46V7.7a4.83 4.83 0 0 1-2.97-1.88z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/escueladearteokan"
              aria-label="Instagram"
              className="text-zinc-400 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.87 5.87 0 0 0-2.13 1.38A5.87 5.87 0 0 0 .63 4.14c-.3.76-.5 1.63-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.87 5.87 0 0 0 2.13-1.38 5.87 5.87 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.38-2.13A5.87 5.87 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/escueladearteokan"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-zinc-400 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.77l-.44 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@escuelasuperiordearteokan?si=xrJiHDsbuymJMqNY"
              aria-label="YouTube"
              className="text-zinc-400 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.87.55 9.38.55 9.38.55s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.5v-7l6.2 3.5z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
