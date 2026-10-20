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

## Payload y despliegue

- URLs públicas de la versión actual: `/es/...` y `/en/...`. Las rutas anteriores con `/draft-1` redirigen a la URL limpia.
- Configura `DATABASE_URI`, `PAYLOAD_SECRET` y `PAYLOAD_OWNER_EMAIL` en el entorno del hosting. Genera `PAYLOAD_SECRET` con `openssl rand -hex 32`; nunca publiques secretos ni uses los valores de ejemplo.
- La cuenta propietaria no se crea mediante la web. En local, después de aplicar las migraciones, establece `PAYLOAD_OWNER_EMAIL` y `PAYLOAD_OWNER_INITIAL_PASSWORD` en `.env` y ejecuta `npm run payload:create-owner`. El script crea solo esa cuenta; no configures `PAYLOAD_OWNER_INITIAL_PASSWORD` en el hosting.
- Solo el email definido en `PAYLOAD_OWNER_EMAIL` puede acceder al admin y administrar colecciones. El público puede leer contenido y enviar solicitudes; las solicitudes solo son visibles para el propietario.
- Usa Node.js `22.22.2` (versión fijada en `.nvmrc`). Para crear la migración inicial con la base de desarrollo disponible, ejecuta `npm run payload:migrate:create -- initial_schema`. Revisa y versiona el archivo generado en `src/migrations/`. En una base nueva, ejecuta `npm run payload:migrate` antes de iniciar la aplicación. `push` está desactivado para evitar cambios automáticos de esquema.
- Payload guarda uploads localmente por ahora. Antes de desplegar en hosting con filesystem efímero, configura almacenamiento persistente o un adaptador de objetos compatible y prueba restauración de respaldos PostgreSQL.

Consulta `AGENTS.md` para convenciones del proyecto y gotchas de configuración.
