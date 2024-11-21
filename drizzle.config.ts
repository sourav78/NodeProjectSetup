import { defineConfig } from 'drizzle-kit';
import {
    DB_HOST,
    DB_NAME,
    DB_PASS,
    DB_USER,
  } from "./src/config/environment.config";

export default defineConfig({
    dialect: 'mysql',
    schema: './src/database/drizzle/schemas/*/*.ts',
    out: './src/database/drizzle/migration',
    dbCredentials: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASS,
        database: DB_NAME
    },
});
