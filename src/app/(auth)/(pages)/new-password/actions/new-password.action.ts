"use server";
// Vendors
import bcrypt from "bcryptjs";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { newPasswordSchema } from "../schemas/new-password.schema";
// Types
import { NewPasswordActionPropsType } from "./types/new-password-props.action.types";
import { NewPasswordActionReturnType } from "./types/new-password-return.action.types";

const newPasswordAction = async ({
  values,
  token,
}: NewPasswordActionPropsType): Promise<NewPasswordActionReturnType> => {
  if (!token) {
    return { error: "Missing token" };
  }

  const validatedFields = newPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { password } = validatedFields.data;

  const existingToken = await prisma.passwordResetToken.findUnique({
    where: {
      token,
    },
  });

  if (!existingToken) {
    return { error: "Invalid token" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired" };
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: existingToken.email,
    },
  });

  if (!existingUser) {
    return { error: "Email does not exist" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await prisma.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Password updated" };
};

export { newPasswordAction };
