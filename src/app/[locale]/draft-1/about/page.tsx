import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { routing } from "@/i18n/routing";
import { faculty } from "@/lib/faculty";

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
  const leadership = faculty.filter(
    (member) => member.role !== "Docente" && member.role !== "Psicóloga",
  );
  const teachers = faculty.filter((member) => member.role === "Docente");
  const psychologist = faculty.filter((member) => member.role === "Psicóloga");

  const renderFacultyGroup = (
    members: typeof faculty,
    title: string,
    eyebrow: string,
    sectionClass = "bg-zinc-950",
  ) => (
    <section className={`${sectionClass} px-6 py-24 text-white md:px-12`}>
      <div className="mx-auto max-w-7xl">
        <p className="text-brand-300 text-sm font-semibold tracking-[0.25em] uppercase">
          {eyebrow}
        </p>
        <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          {title}
        </h2>
        <div className="mt-16 space-y-20 md:space-y-28">
          {members.map((member, index) => (
            <article key={member.file} className="grid items-center gap-8 md:grid-cols-12 md:gap-16">
              <div className={`relative aspect-[4/5] overflow-hidden bg-zinc-900 md:col-span-5 ${index % 2 === 1 ? "md:col-start-8" : ""}`}>
                <Image
                  src={member.file}
                  alt={member.name}
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className={`md:col-span-6 ${index % 2 === 1 ? "md:col-start-2 md:row-start-1" : ""}`}>
                <p className="text-brand-300 text-xs font-semibold tracking-[0.2em] uppercase">
                  {locale === "es" ? member.role : member.roleEn}
                </p>
                <h3 className="font-display mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                  {member.name}
                </h3>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
                  {locale === "es" ? member.bio : member.bioEn}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

  const renderLeadership = () => {
    const [principal, ...team] = leadership;

    return (
      <section className="bg-brand-950 px-6 py-24 text-white md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-brand-300 text-sm font-semibold tracking-[0.25em] uppercase">
            {t("faculty.leadership.eyebrow")}
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            {t("faculty.leadership.title")}
          </h2>

          {principal && (
            <article className="mt-16 grid items-end gap-8 md:grid-cols-12 md:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 md:col-span-7">
                <Image
                  src={principal.file}
                  alt={principal.name}
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="scale-[1.02] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="md:col-span-5 md:pb-6">
                <p className="text-brand-300 text-xs font-semibold tracking-[0.2em] uppercase">
                  {locale === "es" ? principal.role : principal.roleEn}
                </p>
                <h3 className="font-display mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                  {principal.name}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-zinc-300">
                  {locale === "es" ? principal.bio : principal.bioEn}
                </p>
              </div>
            </article>
          )}

          <div className="mt-20 grid gap-px bg-brand-800 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.file} className="bg-brand-950 p-6 md:p-8">
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                  <Image
                    src={member.file}
                    alt={member.name}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <p className="text-brand-300 mt-6 text-xs font-semibold tracking-[0.2em] uppercase">
                  {locale === "es" ? member.role : member.roleEn}
                </p>
                <h3 className="font-display mt-3 text-2xl font-semibold leading-tight">
                  {member.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                  {locale === "es" ? member.bio : member.bioEn}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <section className="bg-[radial-gradient(ellipse_at_top,#24103d_0%,#0a0a0a_62%)] px-6 py-28 text-white md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-brand-300 text-sm font-semibold tracking-[0.3em] uppercase">
            {t("eyebrow")}
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-6xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
            {t("heading")}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-300">
            {t("intro")}
          </p>
        </div>
      </section>

      <section className="bg-brand-50 px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
              {t("mission")}
            </h2>
            <p className="font-display mt-4 text-2xl leading-relaxed tracking-tight">
              {t("missionText")}
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-20">
            <h2 className="text-brand-600 text-sm font-semibold tracking-widest uppercase">
              {t("story")}
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600">
              {t("storyText")}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <div key={value.title} className="border-t border-zinc-200 pt-6">
              <div className="text-brand-600 text-sm font-semibold">
                0{index + 1}
              </div>
              <h3 className="font-display mt-3 text-2xl font-semibold">
                {value.title}
              </h3>
              <p className="mt-2 text-zinc-500">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {renderLeadership()}
      {renderFacultyGroup(
        teachers,
        t("faculty.teachers.title"),
        t("faculty.teachers.eyebrow"),
      )}
      {renderFacultyGroup(
        psychologist,
        t("faculty.psychologist.title"),
        t("faculty.psychologist.eyebrow"),
        "bg-brand-950",
      )}
    </>
  );
}
