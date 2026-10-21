import { routing, type Locale } from '@/i18n/routing';
import { getPageMetadata } from "@/lib/seo";
import Draft1Home from "./draft-1/page";
import Draft1Layout from "./draft-1/layout";
import { getSiteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return getPageMetadata(locale, "home");
}

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: (typeof routing.locales)[number] }>;
}) {
  const home = await Draft1Home({ params });
  const page = await Draft1Layout({ children: home, params });

  const siteUrl = getSiteUrl();
  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "OKAN Escuela Superior de Arte",
    alternateName: "OKAN School of the Arts",
    url: siteUrl?.toString(),
    logo: siteUrl ? new URL("/logo-dark.png", siteUrl).toString() : undefined,
    email: "info@escueladearteokan.com",
    telephone: "+529987863254",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Ciprés 118, esquina Flamboyanes, Alamos 1, SM 311",
      addressLocality: "Cancún",
      addressRegion: "Quintana Roo",
      postalCode: "77560",
      addressCountry: "MX",
    },
    sameAs: [
      "https://www.instagram.com/escueladearteokan",
      "https://www.facebook.com/escueladearteokan",
      "https://www.tiktok.com/@escueladearteokan",
      "https://youtube.com/@escuelasuperiordearteokan",
    ],
  };

  return (
    <>
      {page}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}