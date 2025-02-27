"use server";
// Vendors
import { AuthError } from "next-auth";
// Auth
import { signIn } from "../../../../../auth";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { loginSchema } from "../schemas/login.schema";
// Types
import type {
  LoginActionProps,
  LoginActionReturn,
} from "./types/login.action.types";
// Utils
import { generateVerificationToken } from "../../../utils/token/generate-verification-token.util";
import { sendVerificationTokenEmail } from "../../../utils/email/send-verification-token-email.util";

const loginAction = async ({
  values,
}: LoginActionProps): Promise<LoginActionReturn | undefined> => {
  const validatedFields = loginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Invalid credentials" };
  }

  if (!existingUser.isAuthorized) {
    return { error: "User not authorized" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(email);

    await sendVerificationTokenEmail({
      email: verificationToken.email,
      token: verificationToken.token,
    });

    return { success: "Confirmation email sent" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }

    throw error;
  }
};

export { loginAction };
