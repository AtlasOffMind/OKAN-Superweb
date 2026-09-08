import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { OkanLogo } from "@/components/okan-logo";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { navLinks } from "@/lib/site";

const base = "/draft-2";

export default async function Draft2Layout({
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
    <div className="bg-white text-zinc-900">
      <div className="bg-brand-700 px-6 py-2 text-center text-xs font-medium tracking-wide text-white md:px-12">
        {t("news.item.title")} — {t("news.item.date")}
      </div>

      <header className="flex items-center justify-between px-6 py-5 md:px-12">
        <Link href={base}>
          <OkanLogo width={140} height={56} />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-700 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.key}
              href={`${base}${l.path}`}
              className="hover:text-brand-700 transition-colors"
            >
              {t(`nav.${l.key}`)}
            </Link>
          ))}
          <LocaleSwitcher className="text-brand-600 text-xs font-semibold tracking-widest uppercase" />
        </nav>
        <a
          href={`${base}/admissions`}
          className="bg-brand-700 hover:bg-brand-800 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-colors"
        >
          {t("nav.apply")}
        </a>
      </header>

      <main className="min-h-screen">{children}</main>

      <footer className="bg-brand-700 text-brand-100 px-6 py-16 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <OkanLogo width={130} height={52} />
            <p className="text-brand-100 mt-4 max-w-xs text-sm">
              {t("about.text")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
            <div className="flex flex-col gap-3">
              <div className="mb-2 font-semibold text-white">
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
              <div className="mb-2 font-semibold text-white">
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
              <div className="mb-2 font-semibold text-white">
                {t("nav.contact")}
              </div>
              <span>{c("email")}</span>
              <span>{c("phone")}</span>
              <span>{c("address")}</span>
            </div>
          </div>
        </div>
        <div className="text-brand-200 mx-auto mt-12 max-w-6xl border-t border-white/20 pt-6 text-xs">
          {t("footer.copyright")}
        </div>
      </footer>
    </div>
  );
}
