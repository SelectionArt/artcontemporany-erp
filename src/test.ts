"use server";
import bcryptjs from "bcryptjs";

export async function comparePassword(password: string, hash: string) {
  return bcryptjs.compare(password, hash);
}