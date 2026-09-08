import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { routing } from "@/i18n/routing";
import { leaders } from "@/lib/leaders";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft3About({
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
      <section className="relative overflow-hidden px-6 py-20 md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(147,51,234,0.25),transparent_70%)]" />
        <div className="relative mx-auto max-w-6xl">
          <h1 className="font-display text-6xl leading-none font-semibold tracking-tight italic md:text-8xl">
            {t("heading")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">{t("intro")}</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-brand-400 text-sm tracking-widest uppercase">
              {t("mission")}
            </h2>
            <p className="font-display mt-4 text-3xl leading-relaxed italic">
              {t("missionText")}
            </p>
          </div>
          <div>
            <h2 className="text-brand-400 text-sm tracking-widest uppercase">
              {t("story")}
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              {t("storyText")}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 px-6 py-20 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row">
          {values.map((v) => (
            <div key={v.title} className="flex-1">
              <h3 className="font-display text-brand-300 text-3xl font-semibold italic">
                {v.title}
              </h3>
              <p className="mt-3 text-zinc-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-800 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-5xl font-semibold italic md:text-6xl">
            {t("heading")}
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {leaders.map((l, i) => (
              <div
                key={l.name}
                className={i % 2 === 1 ? "md:translate-y-6" : ""}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-zinc-800">
                  <Image
                    src={l.file}
                    alt={l.name}
                    fill
                    className="object-cover opacity-90 grayscale-[40%] transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
                <div className="font-display mt-3 text-lg italic">{l.name}</div>
                <div className="text-brand-300 text-sm">
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
