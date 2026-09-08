import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { OkanLogo } from "@/components/okan-logo";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { NavDrawer } from "@/components/nav-drawer";
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
    <div className="bg-white text-zinc-900">
      <header className="flex items-center justify-between border-b border-zinc-200 px-6 py-5 md:px-12">
        <Link href={base}>
          <OkanLogo width={140} />
        </Link>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <a
            href={`${base}/admissions`}
            className="hover:bg-brand-700 hidden rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors sm:inline-block"
          >
            {t("nav.apply")}
          </a>
          <NavDrawer
            links={links}
            applyLabel={t("nav.apply")}
            applyHref={`${base}/admissions`}
          />
        </div>
      </header>

      <main className="min-h-screen">{children}</main>

      <footer className="bg-zinc-950 px-6 py-16 text-zinc-400 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <OkanLogo variant="light" width={130} />
            <p className="mt-4 max-w-xs text-sm">{t("about.text")}</p>
          </div>
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
        <div className="mx-auto mt-12 max-w-6xl border-t border-zinc-800 pt-6 text-xs">
          {t("footer.copyright")}
        </div>
      </footer>
    </div>
  );
}
