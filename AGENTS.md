# AGENTS.md

Web para **OKAN Escuela Superior de Arte** — universidad de artes escénicas (actuación, danza, creación). Sitio bilingüe ES/EN de alta calidad visual.

## Stack

- **Next.js 16 (App Router) + TypeScript** — `next@16.3.4`, React 19
- **Tailwind CSS v4** (vía `@tailwindcss/postcss`; config en `src/app/globals.css` con `@theme`)
- **next-intl v4** para i18n ES/EN
- **Payload CMS 3.0** (PostgreSQL) — por agregar en Fase 4 (admin + contenido)
- **shadcn/ui** — por agregar en Fase 2/3 (componentes UI)
- Formularios con email vía **Resend** (por agregar)

## Comandos

```bash
npm run dev          # next dev (Turbopack)
npm run build        # next build
npm run lint         # eslint
npm run typecheck    # tsc --noEmit
npm run format       # prettier --write .
npm run format:check # prettier --check .
```

Orden de verificación: `lint → typecheck → build` (y `format:check`). El pre-commit hook (Husky + lint-staged) corre `eslint --fix` + `prettier --write` sobre staged files.

## Gotchas que un agente NO adivinará

### i18n (ES/EN)
- Locales: `es` (default) y `en`, `localePrefix` implícito = `"always"` → todas las rutas van `/es/...` y `/en/...`.
- **Todas** las páginas públicas viven bajo `src/app/[locale]/`. No crees páginas fuera de `[locale]`.
- Textos en `src/messages/{es,en}.json`. **Siempre agregá la clave en AMBOS archivos** (no solo es).
- Para navegar usá `Link` de `@/i18n/navigation` — **NO** `next/link` (rompe el locale). Igual `useRouter`/`usePathname` de ahí.
- `src/proxy.ts` = middleware de next-intl. Next 16 deprecó el archivo `middleware.ts` → **usar `proxy.ts`**.
- `setRequestLocale(locale)` + `generateStaticParams()` en cada layout/page bajo `[locale]` para SSG.

### npm 12 `allow-scripts` (importante)
Este entorno tiene npm 12 con una política `allow-scripts` restrictiva. Al instalar paquetes nativos (`@swc/core`, `@parcel/watcher`, `unrs-resolver`, y luego `sharp`/`esbuild` de Payload) sus scripts quedan **bloqueados silenciosamente** con un warning. Después de `npm install`, corré:

```bash
npm install-scripts approve --all
```

- La fuente de verdad es el campo `allowScripts` en `package.json` (lo gestiona `npm install-scripts`).
- El `allow-scripts` del `.npmrc` global (`~/.npmrc`) es **ignorado** para proyectos; no intentes arreglarlo ahí.
- No re-cree el `npx create-next-app` con `--use-npm` si falla con `EALLOWSCRIPTS`; el problema es esta política, no tu comando.

### Restricción de nombre npm
El nombre del paquete no puede tener mayúsculas (por eso el repo se llama `OKAN-Superweb` pero el paquete es `okan-superweb`).

## Fuente de contenido (Assets/)

`Assets/` contiene material de marca real que **debe** mapearse en el sitio:

- `Assets/Imagenes/Logo-OKAN.png` — logo (300×120, RGBA)
- `Assets/Imagenes/profesores/*` — 14 fotos del claustro
- `Assets/Profesores.xlsx` — 14 registros (Foto, Nombre, Cargo, Descripción): rectora (Carolina Zepeda), Decano Actuación (Ernesto Tamayo), Decana Danza (Luz Mas), Directora Mercadotecnia (Alia Sánchez), docentes y psicóloga (Doriam Díaz).

Esta carpeta es material fuente; los nombres de archivo de fotos NO coinciden exactamente con los nombres formales del Excel (p.ej. `Yailin-1.jpeg` ↔ "Yailín Coppola"). Relacioná foto↔persona manualmente cuando montes el claustro.

## Dirección de diseño

Referencias a las que apunta el diseño: RADA (rada.ac.uk), LAMDA (lamda.ac.uk), CalArts (calarts.edu), Juilliard. Patrón común: hero visual en gran formato, serif elegante, mucho espacio en blanco, secciones Carreras → Admisiones → Vida estudiantil → Eventos → Noticias → Alumni/Sobre.

Plan general: Fase 0 cimientos (completa) → Fase 1 equipo/skills → Fase 2 tres borradores de landing → Fase 3 páginas estáticas → Fase 4 Payload/admin/formularios → Fase 5 deploy.