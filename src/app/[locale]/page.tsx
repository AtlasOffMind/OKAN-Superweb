import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Draft1Redirect({ params }: { params: { locale: string } }) {
  // Redirecting to 'draft-1' will preserve the current locale prefix via next-intl
  redirect('/draft-1');
}