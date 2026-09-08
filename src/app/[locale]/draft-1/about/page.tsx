import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { routing } from "@/i18n/routing";
import { leaders } from "@/lib/leaders";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft1About({
  params,
}: {
  params: Promise<{ locale: (typeof routing.locales)[number] }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const values = t.raw("values") as { title: string; desc: string }[];

  return (
    <>
      <section className="border-b border-zinc-200 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
            {t("heading")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-500">{t("intro")}</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
              {t("mission")}
            </h2>
            <p className="font-display mt-4 text-2xl leading-relaxed tracking-tight">
              {t("missionText")}
            </p>
          </div>
          <div>
            <h2 className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
              {t("story")}
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600">
              {t("storyText")}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <div key={v.title} className="border-t border-zinc-200 pt-6">
              <div className="text-brand-600 text-sm font-semibold">
                0{i + 1}
              </div>
              <h3 className="font-display mt-3 text-2xl font-semibold">
                {v.title}
              </h3>
              <p className="mt-2 text-zinc-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight">
            {t("heading")}
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {leaders.map((l) => (
              <div key={l.name}>
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                  <Image
                    src={l.file}
                    alt={l.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="font-display mt-4 text-lg font-semibold">
                  {l.name}
                </div>
                <div className="text-sm text-zinc-500">
                  {locale === "es" ? l.es : l.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
