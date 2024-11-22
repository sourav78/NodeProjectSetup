import { eq } from "drizzle-orm";
import { drizzledDb } from "../../../config/mysqlDrizzle.config.js";
import { userSchema } from "../../../database/drizzle/schemas/users/users.schemas.js";
import { hashPassword } from "../helpers/auth.helper.js";
import { userDetailsInterface } from "../helpers/interfaces.helper.js";

export default class AuthRepository {

  // Creating new user in Database
  static async registerUser(userDetails: userDetailsInterface) {

    userDetails.password = await hashPassword(userDetails.password)

    return drizzledDb.insert(userSchema).values(userDetails)
  }

  // Checking dupliated email
  static async checkDuplicate(email: string) {

    const query = drizzledDb.select().from(userSchema).where(eq(userSchema.email, email))

    const result = await query;

    return result.length > 0
  }
}