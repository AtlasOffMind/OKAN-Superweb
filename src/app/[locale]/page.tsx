import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { OkanLogo } from "@/components/okan-logo";
import { LocaleSwitcher } from "@/components/locale-switcher";

const hrefs = ["draft-1", "draft-2", "draft-3"];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("drafts");

  const items = t.raw("items") as { name: string; desc: string }[];

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,51,234,0.22),transparent_60%)]" />

      <header className="relative flex items-center justify-between px-6 py-5 md:px-10">
        <OkanLogo variant="light" width={130} />
        <LocaleSwitcher className="text-brand-300 text-xs tracking-widest uppercase hover:text-white" />
      </header>

      <section className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-16 text-center">
        <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-zinc-400">{t("subtitle")}</p>

        <div className="mt-14 grid w-full gap-6 md:grid-cols-3">
          {items.map((d, i) => (
            <Link
              key={hrefs[i]}
              href={hrefs[i]}
              className="group hover:border-brand-500 hover:bg-brand-950/40 rounded-2xl border border-zinc-800 p-6 text-left transition-colors"
            >
              <div className="font-display text-brand-400 mb-3 text-sm font-semibold">
                0{i + 1}
              </div>
              <div className="font-display text-xl font-semibold">{d.name}</div>
              <p className="mt-2 text-sm text-zinc-400">{d.desc}</p>
              <div className="text-brand-300 mt-4 text-sm font-medium group-hover:underline">
                {t("links")} →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
