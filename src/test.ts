export const config = { runtime: "nodejs" };
("use server");
import bcryptjs from "bcryptjs";

export async function comparePassword(password: string, hash: string) {
  return await bcryptjs.compare(password, hash);
}
