"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const LOCALES = ["es", "en"] as const;

export function LocaleSwitcher({
  className,
  hiddenOnPath,
}: {
  className?: string;
  hiddenOnPath?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  if (hiddenOnPath && pathname === hiddenOnPath) {
    return null;
  }

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-zinc-300 p-0.5 ${className ?? ""
        }`}
    >
      {LOCALES.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => !active && router.replace(pathname, { locale: l })}
            aria-pressed={active}
            className={`min-h-11 rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide uppercase transition-colors ${active
              ? "bg-brand-600 text-white"
              : "hover:text-brand-600 text-zinc-500"
              }`}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
