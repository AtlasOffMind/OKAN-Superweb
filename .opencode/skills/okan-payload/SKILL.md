---
name: okan-payload
description: Usar al implementar el CMS, panel admin, colecciones, base de datos, formularios o cualquier lógica de Payload CMS 3.0. Cubre configuración, colecciones, localización ES/EN y los gotchas de integración con Next 16.
---

# Payload CMS 3.0 en OKAN

Payload 3 corre DENTRO de Next.js 16 (App Router) + PostgreSQL. Es el CMS
completo (admin UI, colecciones, borradores, vista previa, media).

## Setup mínimo

1. Dependencias: `payload`, `@payloadcms/next`, `@payloadcms/db-postgres`,
   `@payloadcms/richtext-lexical`, `sharp` (procesamiento de imágenes).
2. `.env` con `DATABASE_URI` (PostgreSQL) y `PAYLOAD_SECRET`. Creá SIEMPRE
   `.env.example` (el `.env` está en `.gitignore`).
3. Route handler de Payload dentro del App Router + config en
   `src/payload.config.ts`.
4. `next.config.ts`: `withPayload(...)` envolviendo la config existente
   (junto con el plugin de next-intl).

## Gotchas (npm 12 + Next 16)

- Tras `npm install` de dependencias nativas (sharp, esbuild) sus scripts
  quedan bloqueados: corré `npm install-scripts approve --all` (ver AGENTS.md).
- Usá `proxy.ts` (no `middleware.ts`) — Next 16.
- El plugin de localización de Payload debe usar locales `es` (default) y `en`.

## Colecciones sugeridas

- `Programs` (carreras: actuación, danza, creación) — localizado ES/EN.
- `Faculty` (claustro) — mapear con `okan-brand`.
- `News`, `Events` — contenido dinámico.
- `Submissions` (formularios de contacto/admisión).
- `Pages` o bloques de contenido editable.
- Acceso: sólo usuarios con rol admin pueden crear/editar.

## Verificación

`npm run lint && npm run typecheck && npm run build`. Confirmar que
`/admin` carga y que se puede crear/editar una colección.