import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { OkanLogo } from "@/components/okan-logo";
import { LocaleSwitcher } from "@/components/locale-switcher";
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

  return (
    <div className="bg-zinc-950 text-zinc-100">
      <header className="flex items-center justify-between px-6 py-5 md:px-10">
        <Link href={base}>
          <OkanLogo variant="light" width={130} />
        </Link>
        <nav className="font-display hidden items-center gap-8 text-sm text-zinc-400 italic lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.key}
              href={`${base}${l.path}`}
              className="hover:text-brand-400 transition-colors"
            >
              {t(`nav.${l.key}`)}
            </Link>
          ))}
          <LocaleSwitcher className="text-brand-400 text-xs tracking-widest uppercase" />
        </nav>
        <a
          href={`${base}/admissions`}
          className="from-brand-500 to-brand-700 rounded-full bg-gradient-to-r px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          {t("nav.apply")}
        </a>
      </header>

      <main className="min-h-screen">{children}</main>

      <footer className="relative overflow-hidden border-t border-zinc-800 px-6 py-16 md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.25),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:justify-between">
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
              {navLinks.slice(0, 3).map((l) => (
                <Link
                  key={l.key}
                  href={`${base}${l.path}`}
                  className="hover:text-white"
                >
                  {t(`nav.${l.key}`)}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-display mb-2 font-semibold text-white italic">
                {t("nav.about")}
              </div>
              {navLinks.slice(3).map((l) => (
                <Link
                  key={l.key}
                  href={`${base}${l.path}`}
                  className="hover:text-white"
                >
                  {t(`nav.${l.key}`)}
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
        <div className="relative mx-auto mt-12 max-w-6xl border-t border-zinc-800 pt-6 text-xs text-zinc-600">
          {t("footer.copyright")}
        </div>
      </footer>
    </div>
  );
}
