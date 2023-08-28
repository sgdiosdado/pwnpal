import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { env } from "~/env.mjs";

const migrationClient = postgres(env.DATABASE_URL, { max: 1 });
const db = drizzle(migrationClient)
const main = async () => {
  console.time('Migration')
  await migrate(db, { migrationsFolder: "drizzle" });
  console.timeEnd('Migration')
  process.exit()
}

main()
