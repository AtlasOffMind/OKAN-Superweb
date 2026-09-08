"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LocaleSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const target = locale === "es" ? "en" : "es";

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: target })}
      className={className}
      aria-label={`Switch to ${target === "es" ? "Spanish" : "English"}`}
    >
      {target.toUpperCase()}
    </button>
  );
}
