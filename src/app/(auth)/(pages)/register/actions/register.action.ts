"use server";
// Vendors
import bcryptjs from "bcryptjs";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { registerSchema } from "../schemas/register.schema";
// Types
import type {
  RegisterActionProps,
  RegisterActionReturn,
} from "./types/register.action.types";
// Utils
import { generateVerificationToken } from "@/app/(auth)/utils/token/generate-verification-token.util";
import { sendVerificationTokenEmail } from "@/app/(auth)/utils/email/send-verification-token-email.util";

const registerAction = async ({
  values,
}: RegisterActionProps): Promise<RegisterActionReturn> => {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "Email already in use" };
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationTokenEmail({
    email: verificationToken.email,
    token: verificationToken.token,
  });

  return { success: "Confirmation email sent" };
};

export { registerAction };
