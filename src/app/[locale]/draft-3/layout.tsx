import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { OkanLogo } from "@/components/okan-logo";
import { NavDrawer } from "@/components/nav-drawer";
import { navLinks } from "@/lib/site";

const base = "/draft-3";

export default async function Draft3Layout({
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
    <div className="relative bg-zinc-950 text-zinc-100">
      <div className="absolute top-5 right-6 z-30 md:top-8 md:right-10">
        <NavDrawer
          links={links}
          applyLabel={t("nav.apply")}
          applyHref={`${base}/admissions`}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-zinc-900"
        />
      </div>

      <main className="min-h-screen">{children}</main>

      <footer className="relative overflow-hidden border-t border-zinc-800 px-6 py-16 md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.25),transparent_60%)]" />
        <div className="relative flex w-full flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <OkanLogo variant="light" width={130} />
            <p className="mt-4 max-w-xs text-sm text-zinc-500">
              {t("about.text")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm text-zinc-400 md:grid-cols-3">
            <div className="flex flex-col gap-3">
              <div className="font-display mb-2 font-semibold text-white italic">
                {t("nav.programs")}
              </div>
              {links.slice(0, 3).map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-display mb-2 font-semibold text-white italic">
                {t("nav.about")}
              </div>
              {links.slice(3).map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-display mb-2 font-semibold text-white italic">
                {t("nav.contact")}
              </div>
              <span>{c("email")}</span>
              <span>{c("phone")}</span>
              <span>{c("address")}</span>
            </div>
          </div>
        </div>
        <div className="relative mt-12 w-full border-t border-zinc-800 pt-6 text-xs text-zinc-600">
          {t("footer.copyright")}
        </div>
      </footer>
    </div>
  );
}
