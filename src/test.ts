"use server";
export const config = { runtime: "nodejs" };

import bcryptjs from "bcryptjs";

export async function comparePassword(password: string, hash: string) {
  return await bcryptjs.compare(password, hash);
}
