import { setRequestLocale } from "next-intl/server";
import { OkanLogo } from "@/components/okan-logo";
import { routing } from "@/i18n/routing";

const content = {
    es: {
        title: "Política de privacidad",
        intro: "Borrador de política de privacidad para el sitio web de OKAN.",
        sections: [
            ["Quiénes somos", "La dirección de nuestro sitio web es: "],
            ["Comentarios", "Cuando los visitantes dejan comentarios en el sitio, recopilamos los datos que aparecen en el formulario de comentarios, además de la dirección IP del visitante y la cadena de agente de usuario del navegador para ayudar a detectar spam.\n\nUna cadena anonimizada creada a partir de tu dirección de correo electrónico (también llamada hash) puede proporcionarse al servicio Gravatar para comprobar si lo utilizas. La política de privacidad de Gravatar está disponible en https://automattic.com/privacy/. Después de aprobar tu comentario, tu foto de perfil será visible públicamente en el contexto de tu comentario."],
            ["Medios", "Si subes imágenes al sitio web, evita incluir imágenes con datos de ubicación incrustados (EXIF GPS). Los visitantes del sitio pueden descargar y extraer cualquier dato de ubicación de las imágenes."],
            ["Cookies", "Si dejas un comentario en nuestro sitio, puedes optar por guardar tu nombre, correo electrónico y sitio web en cookies. Estas cookies sirven para que no tengas que volver a introducir tus datos al dejar otro comentario y duran un año.\n\nSi visitas nuestra página de inicio de sesión, estableceremos una cookie temporal para determinar si tu navegador acepta cookies. Esta cookie no contiene datos personales y se descarta al cerrar el navegador.\n\nCuando inicias sesión, también configuramos varias cookies para guardar tu información de acceso y tus preferencias de visualización. Las cookies de inicio de sesión duran dos días y las de opciones de pantalla un año. Si seleccionas “Recordarme”, tu sesión persistirá durante dos semanas. Si cierras sesión, las cookies de inicio de sesión se eliminarán.\n\nSi editas o publicas un artículo, se guardará una cookie adicional en tu navegador. No incluye datos personales y solo indica el ID de la publicación que acabas de editar. Caduca después de un día."],
            ["Contenido incrustado de otros sitios web", "Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, videos, imágenes y artículos). El contenido incrustado de otros sitios se comporta exactamente igual que si el visitante hubiera visitado el otro sitio web.\n\nEsos sitios pueden recopilar datos sobre ti, utilizar cookies, incrustar seguimiento de terceros y supervisar tu interacción con ese contenido, incluyendo dicha interacción si tienes una cuenta y has iniciado sesión en ese sitio."],
            ["Con quién compartimos tus datos", "Si solicitas restablecer una contraseña, tu dirección IP se incluirá en el correo de restablecimiento."],
            ["Cuánto tiempo conservamos tus datos", "Si dejas un comentario, el comentario y sus metadatos se conservan indefinidamente. Esto permite reconocer y aprobar automáticamente comentarios posteriores en lugar de mantenerlos en una cola de moderación.\n\nPara usuarios que se registren en este sitio (si los hubiera), también almacenamos la información personal que proporcionen en su perfil. Los usuarios pueden ver, editar o eliminar su información personal en cualquier momento, excepto su nombre de usuario. Los administradores del sitio también pueden verla y editarla."],
            ["Qué derechos tienes sobre tus datos", "Si tienes una cuenta en este sitio o has dejado comentarios, puedes solicitar un archivo exportado de los datos personales que conservamos sobre ti, incluyendo los que hayas proporcionado. También puedes solicitar que eliminemos cualquier dato personal que conservemos. Esto no incluye los datos que estamos obligados a conservar por motivos administrativos, legales o de seguridad."],
            ["Dónde se envían tus datos", "Los comentarios de los visitantes pueden revisarse mediante un servicio automatizado de detección de spam."],
        ],
    },
    en: {
        title: "Privacy Policy",
        intro: "Draft privacy policy for the OKAN website.",
        sections: [
            ["Who we are", "Our website address is: "],
            ["Comments", "When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.\n\nAn anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment."],
            ["Media", "If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website."],
            ["Cookies", "If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.\n\nIf you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.\n\nWhen you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.\n\nIf you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day."],
            ["Embedded content from other websites", "Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.\n\nThese websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website."],
            ["Who we share your data with", "If you request a password reset, your IP address will be included in the reset email."],
            ["How long we retain your data", "If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.\n\nFor users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information."],
            ["What rights you have over your data", "If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes."],
            ["Where your data is sent", "Visitor comments may be checked through an automated spam detection service."],
        ],
    },
} as const;

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
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
                            <div className="mt-4 whitespace-pre-line text-base leading-relaxed text-zinc-600 md:text-lg">
                                {text}
                            </div>
                        </section>
                    ))}
                </article>
            </main>
        </>
    );
}
