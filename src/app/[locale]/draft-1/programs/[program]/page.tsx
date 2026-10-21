import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getPageMetadata } from "@/lib/seo";

const programPages = {
    acting: { contentKey: "acting", seoKey: "acting" },
    "contemporary-dance": { contentKey: "dance", seoKey: "dance" },
    "continuing-studies": { contentKey: "continuingEd", seoKey: "continuing" },
} as const;

type ProgramSlug = keyof typeof programPages;

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        Object.keys(programPages).map((program) => ({ locale, program })),
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale; program: string }>;
}) {
    const { locale, program } = await params;
    if (!(program in programPages)) return {};

    return getPageMetadata(
        locale,
        programPages[program as ProgramSlug].seoKey,
    );
}

export default async function ProgramPage({
    params,
}: {
    params: Promise<{ locale: Locale; program: string }>;
}) {
    const { locale, program } = await params;
    if (!(program in programPages)) notFound();

    setRequestLocale(locale);
    const { contentKey } = programPages[program as ProgramSlug];
    const t = await getTranslations({ locale, namespace: "programs" });
    const paragraphs = t.raw(`${contentKey}.desc`) as string[];
    const outcomes = t.raw(`${contentKey}.outcomes`) as string[];
    const studyPlanHref = t(`${contentKey}.planHref`);
    const isContinuingStudies = contentKey === "continuingEd";
    const title = t(`${contentKey}.title`);

    return (
        <>
            <section className="bg-[radial-gradient(ellipse_at_top,#24103d_0%,#0a0a0a_62%)] px-6 py-28 text-white md:px-12 md:py-36">
                <div className="mx-auto max-w-6xl">
                    <p className="text-brand-300 text-sm font-semibold uppercase">
                        {isContinuingStudies
                            ? locale === "es"
                                ? "Cursos, talleres y formación artística"
                                : "Courses, workshops and arts training"
                            : locale === "es"
                                ? "Licenciatura en artes escénicas"
                                : "Performing arts degree"}
                    </p>
                    <h1 className="font-display mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-6xl md:text-8xl">
                        {title}
                    </h1>
                    <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-300">
                        {t(`${contentKey}.tagline`)}
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/admissions"
                            className="bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-400"
                        >
                            {locale === "es" ? "Consulta admisiones" : "Explore admissions"}
                        </Link>
                        <Link
                            href="/contact"
                            className="border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-zinc-950"
                        >
                            {locale === "es" ? "Solicita información" : "Request information"}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 md:px-12 md:py-28">
                <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[minmax(0,1fr)_18rem]">
                    <article className="space-y-6">
                        <h2 className="font-display text-3xl font-semibold md:text-4xl">
                            {locale === "es" ? "Formación y plan de estudios" : "Training and curriculum"}
                        </h2>
                        {paragraphs.map((paragraph) => (
                            <p key={paragraph} className="text-lg leading-relaxed text-zinc-700">
                                {paragraph}
                            </p>
                        ))}
                    </article>
                    <aside className="h-fit border-t border-zinc-300 pt-6">
                        <h2 className="font-display text-xl font-semibold">
                            {locale === "es" ? "Áreas de formación" : "Areas of study"}
                        </h2>
                        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-700">
                            {outcomes.flatMap((outcome) =>
                                outcome.split(" · ").map((item) => <li key={item}>{item}</li>),
                            )}
                        </ul>
                        <a
                            href={studyPlanHref}
                            className="text-brand-700 mt-8 inline-flex text-sm font-semibold underline underline-offset-4"
                        >
                            {t(`${contentKey}.planStudy`)}
                        </a>
                    </aside>
                </div>
            </section>

            <section className="bg-brand-50 px-6 py-16 md:px-12">
                <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="font-display text-3xl font-semibold">
                            {locale === "es" ? "Estudia en OKAN, Cancún" : "Study at OKAN in Cancun"}
                        </h2>
                        <p className="mt-3 max-w-2xl leading-relaxed text-zinc-700">
                            {locale === "es"
                                ? "Conoce el proceso de ingreso y conversa con el equipo de admisiones sobre tu ruta de formación."
                                : "Learn about the application process and talk with the admissions team about your training path."}
                        </p>
                    </div>
                    <Link
                        href="/admissions"
                        className="bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                    >
                        {locale === "es" ? "Ver proceso de admisión" : "View the admissions process"}
                    </Link>
                </div>
            </section>
        </>
    );
}