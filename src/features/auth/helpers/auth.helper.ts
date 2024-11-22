import bcrypt from "bcrypt"

export const hashPassword = async (password: string): Promise<string> => {

    const SALT_ROUND = 10;

    return await bcrypt.hash(password, SALT_ROUND)
}