import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

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
  const t = await getTranslations("home");

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight">
        {t("heroTitle")}
      </h1>
      <p className="max-w-xl text-lg text-zinc-600">{t("heroSubtitle")}</p>
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        <a
          href={`/${locale}/admisiones`}
          className="bg-foreground text-background rounded-full px-6 py-3 transition-colors hover:bg-zinc-800"
        >
          {t("ctaApply")}
        </a>
        <a
          href={`/${locale}/carreras`}
          className="rounded-full border border-solid border-black/10 px-6 py-3 transition-colors hover:bg-black/5"
        >
          {t("ctaPrograms")}
        </a>
      </div>
    </main>
  );
}
