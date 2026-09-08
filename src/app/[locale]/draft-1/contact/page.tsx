import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Draft1Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

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
          <div className="flex flex-col gap-8">
            <div>
              <div className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
                {t("emailLabel")}
              </div>
              <div className="mt-2 text-lg">{t("email")}</div>
            </div>
            <div>
              <div className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
                {t("phoneLabel")}
              </div>
              <div className="mt-2 text-lg">{t("phone")}</div>
            </div>
            <div>
              <div className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
                {t("addressLabel")}
              </div>
              <div className="mt-2 text-lg">{t("address")}</div>
            </div>
            <div>
              <div className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
                {t("hoursLabel")}
              </div>
              <div className="mt-2 text-lg">{t("hours")}</div>
            </div>
          </div>

          <form className="flex flex-col gap-5 rounded-2xl border border-zinc-200 p-8">
            <h2 className="font-display text-2xl font-semibold">
              {t("form.title")}
            </h2>
            <input
              type="text"
              placeholder={t("form.name")}
              className="focus:border-brand-500 rounded-xl border border-zinc-300 px-4 py-3 transition-colors outline-none"
            />
            <input
              type="email"
              placeholder={t("form.email")}
              className="focus:border-brand-500 rounded-xl border border-zinc-300 px-4 py-3 transition-colors outline-none"
            />
            <textarea
              placeholder={t("form.message")}
              rows={4}
              className="focus:border-brand-500 rounded-xl border border-zinc-300 px-4 py-3 transition-colors outline-none"
            />
            <button
              type="submit"
              className="hover:bg-brand-700 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors"
            >
              {t("form.submit")}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
