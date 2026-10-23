import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "submissions" ADD COLUMN "completed_high_school" boolean DEFAULT false NOT NULL;
  ALTER TABLE "submissions" ADD COLUMN "parental_permission" boolean DEFAULT false NOT NULL;
  ALTER TABLE "submissions" ADD COLUMN "privacy_consent" boolean DEFAULT false;
  ALTER TABLE "submissions" ADD COLUMN "privacy_notice_version" varchar;
  ALTER TABLE "submissions" ADD COLUMN "consented_at" timestamp(3) with time zone;
  UPDATE "submissions"
    SET "privacy_consent" = COALESCE("privacy_consent", false),
      "privacy_notice_version" = COALESCE("privacy_notice_version", 'legacy-no-consent-recorded'),
      "consented_at" = COALESCE("consented_at", "created_at", now())
    WHERE "privacy_consent" IS NULL
       OR "privacy_notice_version" IS NULL
       OR "consented_at" IS NULL;
  ALTER TABLE "submissions" ALTER COLUMN "privacy_consent" SET NOT NULL;
  ALTER TABLE "submissions" ALTER COLUMN "privacy_notice_version" SET NOT NULL;
  ALTER TABLE "submissions" ALTER COLUMN "consented_at" SET NOT NULL;`);
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "submissions" DROP COLUMN "completed_high_school";
  ALTER TABLE "submissions" DROP COLUMN "parental_permission";
  ALTER TABLE "submissions" DROP COLUMN "privacy_consent";
  ALTER TABLE "submissions" DROP COLUMN "privacy_notice_version";
  ALTER TABLE "submissions" DROP COLUMN "consented_at";`);
}
