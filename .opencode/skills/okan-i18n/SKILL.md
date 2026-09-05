---
name: okan-i18n
description: Usar SIEMPRE al tocar texto, traducciones, mensajes o rutas bilingües (Spanish/English, locale, es/en). Cubre el flujo completo de next-intl en OKAN para agregar claves en ambos JSON, navegar sin romper el locale y el proxy.
---

# i18n ES/EN en OKAN

next-intl v4. Locales: `es` (default) y `en`. `localePrefix` = `"always"`,
así que toda ruta lleva prefijo `/es/...` y `/en/...`.

## Archivos y estructura

- Textos: `src/messages/es.json` y `src/messages/en.json`.
- `src/i18n/routing.ts` → `defineRouting` (locales + default).
- `src/i18n/navigation.ts` → `createNavigation` (exporta Link/useRouter/...).
- `src/i18n/request.ts` → `getRequestConfig` (carga mensajes del locale).
- `src/proxy.ts` → middleware de next-intl (Next 16: `proxy.ts`, NO `middleware.ts`).
- Páginas: `src/app/[locale]/...`.

## Reglas críticas

1. **Agregar una clave SIEMPRE en AMBOS `es.json` y `en.json`.** Si solo la
   agregás en uno, el otro idioma muestra la clave en crudo o falla.
2. Navegación: usá `Link`, `useRouter`, `usePathname` de `@/i18n/navigation`.
   NUNCA `next/link` (pierde el prefijo de locale).
3. Toda página pública dentro de `[locale]`. En cada `page.tsx`/`layout.tsx`
   bajo `[locale]`: `setRequestLocale(locale)` + `generateStaticParams()`.
4. Next 16: `params` es `Promise`. Hacé `const { locale } = await params`.
5. NLP: `getTranslations` en Server Components; `useTranslations` en client.

## Ejemplo mínimo (server component)

```tsx
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("namespace");
  return <h1>{t("key")}</h1>;
}
```

## Verificación

`npm run lint && npm run typecheck && npm run build`. El build debe generar
`/es` y `/en` como rutas SSG.
