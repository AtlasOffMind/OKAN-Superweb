# OKAN Escuela Superior de Arte

Sitio web de la **OKAN Escuela Superior de Arte** — universidad de artes escénicas (actuación, danza, creación). Web bilingüe ES/EN de alta calidad visual.

## Stack

- **Next.js 16 (App Router) + TypeScript**
- **Tailwind CSS v4**
- **next-intl** (i18n ES/EN)
- **Payload CMS 3.0** + **Resend** (fases posteriores)

## Desarrollo

```bash
npm install              # instalar dependencias
npm run dev              # servidor de desarrollo
npm run lint             # eslint
npm run typecheck        # tsc --noEmit
npm run build            # build de producción
npm run format           # prettier --write .
```

El sitio está bajo `src/app/[locale]/` con locales `es` (default) y `en`, por lo que las rutas usan el prefijo `/es/...` y `/en/...`.

Consulta `AGENTS.md` para convenciones del proyecto y gotchas de configuración.
