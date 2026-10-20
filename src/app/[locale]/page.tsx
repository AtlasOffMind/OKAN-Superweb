import { routing } from '@/i18n/routing';
import Draft1Home from "./draft-1/page";
import Draft1Layout from "./draft-1/layout";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: (typeof routing.locales)[number] }>;
}) {
  const home = await Draft1Home({ params });
  return Draft1Layout({ children: home, params });
}