import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getSiteUrl, indexablePaths } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];

  return routing.locales.flatMap((locale) =>
    indexablePaths.map((path) => ({
      url: new URL(`/${locale}${path}`, siteUrl).toString(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((alternateLocale) => [
            alternateLocale,
            new URL(`/${alternateLocale}${path}`, siteUrl).toString(),
          ]),
        ),
      },
    })),
  );
}