import * as migration_20261020_180110_initial_schema from "./20261020_180110_initial_schema";
import * as migration_20261023_165429_admission_consent_and_eligibility from "./20261023_165429_admission_consent_and_eligibility";

export const migrations = [
  {
    up: migration_20261020_180110_initial_schema.up,
    down: migration_20261020_180110_initial_schema.down,
    name: "20261020_180110_initial_schema",
  },
  {
    up: migration_20261023_165429_admission_consent_and_eligibility.up,
    down: migration_20261023_165429_admission_consent_and_eligibility.down,
    name: "20261023_165429_admission_consent_and_eligibility",
  },
];
