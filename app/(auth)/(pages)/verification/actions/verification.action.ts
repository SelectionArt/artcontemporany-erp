"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Types
import type {
  VerificationActionProps,
  VerificationActionReturn,
} from "./types/verifications.action.types";

const verificationAction = async ({
  token,
}: VerificationActionProps): Promise<VerificationActionReturn> => {
  if (!token) {
    return { error: "Missing token" };
  }

  const existingToken = await prisma.verificationToken.findUnique({
    where: { token },
  });

  if (!existingToken) {
    return { error: "Token does not exist" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired" };
  }

  const existingUser = await prisma.user.findFirst({
    where: { email: existingToken.email },
  });

  if (!existingUser) {
    return { error: "Email does not exist" };
  }

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await prisma.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Email verified" };
};

export { verificationAction };
