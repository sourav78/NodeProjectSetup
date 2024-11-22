import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const userSchema = mysqlTable("users", {
    id: int("id").autoincrement().primaryKey(),
    userName: varchar("userName", {length: 50}).notNull(),
    email: varchar("email", {length: 50}).notNull().unique(),
    password: varchar("password", {length: 200}).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull()
})