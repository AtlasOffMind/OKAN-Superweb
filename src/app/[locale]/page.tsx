import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { OkanLogo } from "@/components/okan-logo";

const drafts = [
  {
    href: "/draft-1",
    name: "Clásico · Conservatorio",
    desc: "Serif elegante, monocromo y sobrio, fotografía en gran formato.",
  },
  {
    href: "/draft-2",
    name: "Moderno · Editorial",
    desc: "Asimétrico, uso audaz del púrpura, grilla contemporánea.",
  },
  {
    href: "/draft-3",
    name: "Expresivo · Artístico",
    desc: "Tipografía oversized, gradientes y energía escénica.",
  },
];

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

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center px-6 py-16">
      <OkanLogo width={180} height={72} className="mb-16" />

      <h1 className="font-display text-4xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-zinc-500">
        {t("subtitle")}
      </p>

      <div className="mt-14 grid w-full gap-6 sm:grid-cols-3">
        {drafts.map((d, i) => (
          <Link
            key={d.href}
            href={d.href}
            className="group hover:border-brand-400 hover:bg-brand-50 rounded-2xl border border-zinc-200 p-6 text-left transition-colors"
          >
            <div className="text-brand-600 mb-3 text-sm font-semibold">
              0{i + 1}
            </div>
            <div className="font-display text-xl font-semibold">{d.name}</div>
            <p className="mt-2 text-sm text-zinc-500">{d.desc}</p>
            <div className="text-brand-700 mt-4 text-sm font-medium group-hover:underline">
              {t("links")} →
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
