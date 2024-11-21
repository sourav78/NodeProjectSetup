import dotenv from "dotenv";
dotenv.config();

// Datebase Details
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USER = process.env.DB_USER || "root";
const DB_PASS = process.env.DB_PASSWORD || "";
const DB_NAME = process.env.DB_DATABASE || "drizzle_db";

export { DB_HOST, DB_USER, DB_PASS, DB_NAME };