import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";

const pageSeo = {
  home: {
    es: {
      title: "Escuela Superior de Arte en Cancún",
      description:
        "OKAN es una escuela superior de arte en Cancún con formación profesional en actuación, danza contemporánea y estudios continuos.",
    },
    en: {
      title: "School of the Arts in Cancun",
      description:
        "OKAN is a school of the arts in Cancun offering professional training in acting, contemporary dance and continuing studies.",
    },
  },
  about: {
    es: {
      title: "Nosotros | Escuela de arte en Cancún",
      description:
        "Conoce la historia, metodología, equipo directivo y docentes de OKAN Escuela Superior de Arte en Cancún, Quintana Roo.",
    },
    en: {
      title: "About OKAN | School of the Arts in Cancun",
      description:
        "Meet OKAN's leadership and faculty and learn about the school's history and approach to performing arts education in Cancun, Mexico.",
    },
  },
  programs: {
    es: {
      title: "Licenciaturas en Actuación y Danza | Cancún",
      description:
        "Explora los programas de OKAN en Cancún: licenciaturas en Actuación y Danza Contemporánea, además de Estudios Continuos en artes escénicas.",
    },
    en: {
      title: "Acting and Dance Programs | OKAN Cancun",
      description:
        "Explore OKAN's programs in Cancun: degree training in acting and contemporary dance, plus continuing studies in the performing arts.",
    },
  },
  acting: {
    es: {
      title: "Licenciatura en Actuación en Cancún | OKAN",
      description:
        "Estudia la Licenciatura en Actuación en Cancún. Conoce la formación actoral de OKAN: voz, cuerpo, dramaturgia, cámara, creación e investigación escénica.",
    },
    en: {
      title: "Acting Degree in Cancun | OKAN",
      description:
        "Study acting in Cancun at OKAN. Explore professional training in voice, movement, dramaturgy, screen acting, performance creation and research.",
    },
  },
  dance: {
    es: {
      title: "Licenciatura en Danza Contemporánea en Cancún | OKAN",
      description:
        "Estudia Danza Contemporánea en Cancún. Descubre la licenciatura de OKAN en técnica, composición coreográfica, investigación y creación escénica.",
    },
    en: {
      title: "Contemporary Dance Degree in Cancun | OKAN",
      description:
        "Study contemporary dance in Cancun at OKAN, with professional training in technique, choreography, performance research and creation.",
    },
  },
  continuing: {
    es: {
      title: "Cursos y talleres de artes escénicas en Cancún | OKAN",
      description:
        "Explora cursos, talleres, laboratorios y diplomados de actuación, danza, cuerpo y voz en Estudios Continuos de OKAN en Cancún.",
    },
    en: {
      title: "Performing Arts Courses and Workshops in Cancun | OKAN",
      description:
        "Explore acting, dance, movement and voice courses, workshops, labs and diplomas through OKAN Continuing Studies in Cancun.",
    },
  },
  admissions: {
    es: {
      title: "Admisiones | Estudia actuación y danza en Cancún",
      description:
        "Conoce el proceso de admisión de OKAN Escuela Superior de Arte y solicita información para estudiar Actuación o Danza Contemporánea en Cancún.",
    },
    en: {
      title: "Admissions | Study Acting and Dance in Cancun",
      description:
        "Learn about admission to OKAN School of the Arts and enquire about studying acting or contemporary dance in Cancun, Mexico.",
    },
  },
  contact: {
    es: {
      title: "Contacto y ubicación | OKAN Cancún",
      description:
        "Contacta a OKAN Escuela Superior de Arte. Encuentra nuestra sede en Cancún, Quintana Roo, y solicita información sobre programas y admisiones.",
    },
    en: {
      title: "Contact and Location | OKAN Cancun",
      description:
        "Contact OKAN School of the Arts in Cancun, Quintana Roo, Mexico, for information about programs and admissions.",
    },
  },
  life: {
    es: {
      title: "Vida estudiantil | Comunidad OKAN",
      description:
        "Descubre la vida estudiantil en OKAN: ensayos, montajes, colaboraciones y acompañamiento para artistas en formación en Cancún.",
    },
    en: {
      title: "Student Life | OKAN School of the Arts",
      description:
        "Discover student life at OKAN, with rehearsals, productions, collaborations and support for performing arts students in Cancun.",
    },
  },
  bitacora: {
    es: {
      title: "Noticias, agenda y cultura | Bitácora OKAN",
      description:
        "Consulta noticias, eventos, actividades y publicaciones de OKAN Escuela Superior de Arte y de la comunidad artística de Cancún.",
    },
    en: {
      title: "News and Events | OKAN Journal",
      description:
        "Read news, events and updates from OKAN School of the Arts and the performing arts community in Cancun, Mexico.",
    },
  },
  agora: {
    es: {
      title: "Ágora OKAN | Conversaciones sobre arte y escena",
      description:
        "Explora Ágora OKAN, un espacio de conversaciones y encuentros sobre artes escénicas, creación y pensamiento artístico.",
    },
    en: {
      title: "Ágora OKAN | Conversations on the Performing Arts",
      description:
        "Explore Ágora OKAN, a space for conversations and encounters about performing arts, creative practice and artistic thought.",
    },
  },
  laboratorio: {
    es: {
      title: "OKAN Laboratorio Escénico | Teatro y danza",
      description:
        "Conoce las producciones de OKAN Laboratorio Escénico, con propuestas profesionales de teatro y danza creadas en Cancún.",
    },
    en: {
      title: "OKAN Stage Laboratory | Theatre and Dance",
      description:
        "Discover theatre and dance productions by OKAN Stage Laboratory, developed with artists and students in Cancun, Mexico.",
    },
  },
  espectaculos: {
    es: {
      title: "OKAN Espectáculos | Producción escénica en Cancún",
      description:
        "Conoce OKAN Espectáculos, propuestas de teatro y danza para hoteles, convenciones, eventos y la industria turística.",
    },
    en: {
      title: "OKAN Shows | Performing Arts in Cancun",
      description:
        "Discover OKAN's theatre and dance productions for hotels, conventions, events and the tourism and entertainment industries.",
    },
  },
  privacy: {
    es: {
      title: "Política de privacidad | OKAN",
      description:
        "Consulta la política de privacidad del sitio web de OKAN Escuela Superior de Arte.",
    },
    en: {
      title: "Privacy Policy | OKAN",
      description: "Read the privacy policy for the OKAN School of the Arts website.",
    },
  },
} as const;

export type SeoPage = keyof typeof pageSeo;

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configuredUrl) return undefined;

  try {
    const url = new URL(configuredUrl);
    if (url.protocol !== "https:" && url.protocol !== "http:") return undefined;
    if (url.hostname.endsWith(".example")) return undefined;
    return new URL(url.origin);
  } catch {
    return undefined;
  }
}

export function getPageMetadata(locale: Locale, page: SeoPage): Metadata {
  const siteUrl = getSiteUrl();
  const path = pagePaths[page];
  const localizedPath = `/${locale}${path}`;
  const localizedUrl = siteUrl ? new URL(localizedPath, siteUrl) : undefined;
  const translations = pageSeo[page];

  return {
    title: { absolute: translations[locale].title },
    description: translations[locale].description,
    robots: page === "privacy" ? { index: false, follow: true } : undefined,
    alternates: siteUrl
      ? {
          canonical: localizedUrl,
          languages: {
            es: new URL(`/es${path}`, siteUrl),
            en: new URL(`/en${path}`, siteUrl),
          },
        }
      : undefined,
    openGraph: {
      title: translations[locale].title,
      description: translations[locale].description,
      type: "website",
      locale: locale === "es" ? "es_MX" : "en_US",
      url: localizedUrl,
      siteName: "OKAN Escuela Superior de Arte",
    },
  };
}

export const indexablePaths = [
  "",
  "/about",
  "/programs",
  "/programs/acting",
  "/programs/contemporary-dance",
  "/programs/continuing-studies",
  "/admissions",
  "/contact",
  "/life",
  "/bitacora",
  "/okan-en-accion/agora",
  "/okan-en-accion/laboratorio",
  "/okan-en-accion/espectaculos",
] as const;

const pagePaths: Record<SeoPage, string> = {
  home: "",
  about: "/about",
  programs: "/programs",
  acting: "/programs/acting",
  dance: "/programs/contemporary-dance",
  continuing: "/programs/continuing-studies",
  admissions: "/admissions",
  contact: "/contact",
  life: "/life",
  bitacora: "/bitacora",
  agora: "/okan-en-accion/agora",
  laboratorio: "/okan-en-accion/laboratorio",
  espectaculos: "/okan-en-accion/espectaculos",
  privacy: "/privacy-policy",
};