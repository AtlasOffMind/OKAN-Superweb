# Hostinger VPS Deployment

This setup keeps the existing Next.js/Payload app, PostgreSQL, and Payload uploads on one Hostinger VPS. The production Compose file binds the app only to `127.0.0.1:3000`; a reverse proxy, HTTPS, and public DNS are separate steps.

## Production environment file

Create `/opt/okan/.env` on the VPS with mode `600` and populate it using [.env.hostinger.example](../.env.hostinger.example) as a key reference. Do not use the example placeholders as production credentials or share real values in chat.

Required values:

- `POSTGRES_DB`: production database name.
- `POSTGRES_USER`: production database role.
- `POSTGRES_PASSWORD`: generate a long random hexadecimal value so it is safe in the Compose-generated connection URL.
- `PAYLOAD_SECRET`: a separate long random hexadecimal secret.
- `PAYLOAD_OWNER_EMAIL`: the sole administrator email configured by the project.
- `NEXT_PUBLIC_SITE_URL`: canonical HTTPS origin, without a trailing slash. Set it to the reserved domain before the production build, even while DNS is not yet pointing at the VPS.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: Cloudflare Turnstile site key. This public key is embedded in the client build.
- `TURNSTILE_SECRET_KEY`: Cloudflare Turnstile secret key. Keep it only in the VPS environment file; never pass it as a Docker build argument.

Optional email values: `RESEND_API_KEY`, `RESEND_FROM`, and `CONTACT_EMAIL`. The app builds `DATABASE_URI` from the three `POSTGRES_*` variables and the internal Compose hostname `postgres`; do not add a second `DATABASE_URI` entry to the env file.

## Admission privacy and abuse controls

- The admission form displays a privacy/consent dialog before submission. The policy at `/es/privacy-policy` and `/en/privacy-policy` still has `[COMPLETAR]` fields for the legal entity/contact, retention period, privacy contact, and last-updated date. OKAN must complete and review these with its privacy/legal advisor before public launch.
- Applicants must be 18 or older, or 17 with completed high school and parental/legal guardian permission. The form records these declarations; it does not verify supporting documents.
- Cloudflare Turnstile is validated server-side. Configure the widget to allow the final public hostname and any temporary test hostname used. Without valid site and secret keys, the form intentionally refuses submissions.
- The app limits an IP to five successful Turnstile checks/submissions per 15-minute window in its process memory. This is a basic single-instance safeguard, not a durable or distributed rate limiter; the counter resets on app restart. If the app is later scaled to multiple instances, move rate limiting to shared storage.
- Direct anonymous creation through Payload's REST API is disabled for `submissions`; validated form submissions use the server-side Local API.
- The new migration `20261023_165429_admission_consent_and_eligibility` adds consent and eligibility fields. Existing requests are retained and tagged `legacy-no-consent-recorded`; they are not retroactively marked as consented.

## Files and persistent data

- [Dockerfile.production](../Dockerfile.production) builds and runs with Node.js `22.22.2`.
- [docker-compose.production.yml](../docker-compose.production.yml) runs the app and PostgreSQL. PostgreSQL has no public port; the app is bound to VPS-local port `3000` only.
- [.dockerignore](../.dockerignore) excludes local secrets, dependencies, build output, and source archives while retaining `public/images`.
- The app uses `PAYLOAD_MEDIA_DIR=/app/data/media`; [Media.ts](../src/collections/Media.ts) uses that path only when set, preserving the local default otherwise.
- PostgreSQL data and Payload media use separate external named volumes. They must be created before Compose can start. Do not use `docker compose down -v`.

## Deferred VPS steps

These commands are deliberately not run as part of repository setup. Execute them on the VPS only when ready and with a verified backup plan:

1. Create the two named volumes: `docker volume create okan_postgres_data` and `docker volume create okan_payload_uploads`.
2. Set ownership on the media volume once, before first app startup: `docker run --rm --user 0:0 -v okan_payload_uploads:/app/data/media alpine:3.24.2 chown -R 1000:1000 /app/data/media`.
3. Validate Compose without starting services, ensuring `/opt/okan/.env` is populated: `docker compose --env-file /opt/okan/.env -f /opt/okan/docker-compose.production.yml config --quiet`.
4. Build the app separately from PostgreSQL first. Monitor memory; stop if the KVM 1 runs out of RAM. No deployment or migration is implied by a successful build.
5. Before deploying this admission/privacy update, create and verify a PostgreSQL backup, then explicitly authorize `npm run payload:migrate` to apply any pending migration. Never migrate a database containing important data without a verified backup.
6. Configure a reverse proxy and HTTPS, then point the domain's `@` and `www` A records to the VPS IP. Do not change nameservers unless intentionally moving DNS management.

The VPS plan is 4 GB RAM, so a Next.js production build may be memory-constrained. If it fails, do not repeatedly retry on the live server; build elsewhere and transfer the resulting image, or upgrade resources.
