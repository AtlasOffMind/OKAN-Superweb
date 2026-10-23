import { setRequestLocale } from "next-intl/server";
import { OkanLogo } from "@/components/okan-logo";
import { routing, type Locale } from "@/i18n/routing";
import { getPageMetadata } from "@/lib/seo";

const content = {
    es: {
        title: "Política de privacidad",
        intro:
            "Información sobre el tratamiento de datos enviados en solicitudes de admisión.",
        sections: [
            [
                "Responsable",
                "Responsable del tratamiento: OKAN Escuela Superior de Arte [COMPLETAR RAZÓN SOCIAL Y DOMICILIO]. Contacto de privacidad: [COMPLETAR CORREO O MEDIO DE CONTACTO].",
            ],
            [
                "Datos y finalidad",
                "El formulario puede recopilar nombre, teléfono, correo electrónico, edad, programa de interés, fecha de ingreso y mensaje. Los usamos para atender solicitudes de admisión y contactar a la persona interesada sobre el proceso. No incluyas información sensible en el campo de mensaje.",
            ],
            [
                "Quién puede acceder y proveedores",
                "El personal autorizado de admisiones puede consultar las solicitudes. Para operar el sitio y almacenar la información se utiliza Hostinger como proveedor de alojamiento y PostgreSQL/Payload en el VPS. Si se habilitan avisos, Resend procesa el envío de correo. OKAN debe confirmar y completar la información legal aplicable sobre proveedores y ubicaciones de tratamiento antes de publicar.",
            ],
            [
                "Conservación",
                "Las solicitudes se conservarán durante [COMPLETAR PLAZO DE RETENCIÓN] desde el último contacto relacionado con admisiones. Después se eliminarán o anonimizarán, salvo que exista una obligación legal de conservarlas. OKAN debe definir y aplicar el procedimiento de eliminación.",
            ],
            [
                "Derechos y solicitudes",
                "Puedes solicitar acceso, corrección o eliminación de tus datos escribiendo a [COMPLETAR CORREO DE PRIVACIDAD]. La solicitud será atendida conforme a la legislación aplicable y a los plazos correspondientes.",
            ],
            [
                "Personas de 17 años",
                "La edad ordinaria mínima de ingreso es 18 años. Una persona de 17 años puede solicitar admisión si concluyó el bachillerato y cuenta con autorización de su madre, padre o tutor legal. El formulario registra estas declaraciones; OKAN puede solicitar documentación para verificarlas antes de una decisión de admisión.",
            ],
            [
                "Consentimiento",
                "Antes de enviar el formulario se presenta este aviso y se solicita una aceptación expresa. La aceptación queda asociada a la solicitud junto con la versión del aviso y la fecha de envío. La verificación anti-spam de Cloudflare Turnstile procesa el token necesario para validar el envío.",
            ],
            [
                "Actualizaciones",
                "Esta política puede actualizarse cuando cambien el formulario, los proveedores o las prácticas de tratamiento. Fecha de actualización: [COMPLETAR].",
            ],
        ],
    },
    en: {
        title: "Privacy Policy",
        intro: "How we handle information submitted with admission applications.",
        sections: [
            [
                "Data controller",
                "Controller: OKAN Escuela Superior de Arte [ADD LEGAL ENTITY NAME AND ADDRESS]. Privacy contact: [ADD PRIVACY CONTACT EMAIL OR CHANNEL].",
            ],
            [
                "Data and purpose",
                "The form may collect your name, phone number, email address, age, program of interest, intended admission term and message. We use it to handle admission inquiries and contact the applicant about the process. Do not include sensitive information in the message field.",
            ],
            [
                "Access and service providers",
                "Authorized admissions staff can access applications. The website and application data are hosted by Hostinger and stored in PostgreSQL/Payload on the VPS. If notifications are enabled, Resend processes email delivery. OKAN must confirm and complete applicable legal details about processors and processing locations before publication.",
            ],
            [
                "Retention",
                "Applications will be retained for [ADD RETENTION PERIOD] after the last admission-related contact, then deleted or anonymized unless a legal obligation requires longer retention. OKAN must define and follow the deletion procedure.",
            ],
            [
                "Your rights",
                "To request access, correction or deletion of your data, contact [ADD PRIVACY EMAIL]. Requests will be handled under applicable law and timelines.",
            ],
            [
                "Applicants aged 17",
                "The standard minimum admission age is 18. A 17-year-old may apply if they have completed high school and have permission from a parent or legal guardian. The form records these declarations; OKAN may request documents to verify them before making an admission decision.",
            ],
            [
                "Consent",
                "Before submission, this notice is presented and express acceptance is requested. Acceptance is stored with the application along with the notice version and submission time. Cloudflare Turnstile's anti-spam verification processes the token needed to validate the submission.",
            ],
            [
                "Updates",
                "This policy may be updated when the form, providers or data practices change. Last updated: [ADD DATE].",
            ],
        ],
    },
} as const;

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    return getPageMetadata(locale, "privacy");
}

export default async function PrivacyPolicyPage({
    params,
}: {
    params: Promise<{ locale: (typeof routing.locales)[number] }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const copy = content[locale];

    return (
        <>
            <section className="bg-[radial-gradient(ellipse_at_top,#24103d_0%,#0a0a0a_62%)] px-6 py-24 text-white md:px-12 md:py-32">
                <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
                    <OkanLogo variant="light" width={260} />
                    <h1 className="font-display mt-12 text-5xl font-semibold tracking-tight sm:text-6xl md:text-8xl">
                        {copy.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-zinc-300">{copy.intro}</p>
                </div>
            </section>
            <main className="px-6 py-20 md:px-12">
                <article className="mx-auto max-w-4xl space-y-12">
                    {copy.sections.map(([heading, text]) => (
                        <section key={heading}>
                            <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
                                {heading}
                            </h2>
                            <div className="mt-4 text-base leading-relaxed whitespace-pre-line text-zinc-600 md:text-lg">
                                {text}
                            </div>
                        </section>
                    ))}
                </article>
            </main>
        </>
    );
}
