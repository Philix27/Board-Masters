import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema/*.ts",
  out: "./db/migrations",
  migrations: {
    table: "migrations_custom", // default `__drizzle_migrations`,
    schema: "public", // used in PostgreSQL only and default to `drizzle`
  },
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});

//   schema: "./server/db/schema/*.ts",
//   out: "./drizzle",
//   dbCredentials: {
//     // url: ""
//     // dbName: process.env.DB_NAME,
//     // wranglerConfigPath: "",
//     // host: process.env.DB_HOST,
//     // user: process.env.DB_USER,
//     // password: process.env.DB_PASSWORD,
//     // database: process.env.DB_NAME,
//   },
