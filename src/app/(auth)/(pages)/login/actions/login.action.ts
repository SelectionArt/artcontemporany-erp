"use server";
// Vendors
import { AuthError } from "next-auth";
// Auth
import { signIn } from "@/auth";
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
import { generateTwoFactorToken } from "@/app/(auth)/utils/token/generate-two-factor-token.util";
import { generateVerificationToken } from "@/app/(auth)/utils/token/generate-verification-token.util";
import { sendTwoFactorAuthenticationEmail } from "@/app/(auth)/utils/email/send-two-factor-authentication-email.util";
import { sendVerificationTokenEmail } from "@/app/(auth)/utils/email/send-verification-token-email.util";

const loginAction = async ({
  values,
}: LoginActionProps): Promise<LoginActionReturn | undefined> => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, otp } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Invalid credentials" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(email);

    await sendVerificationTokenEmail({
      email: verificationToken.email,
      token: verificationToken.token,
    });

    return { success: "Confirmation email sent" };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email && !otp) {
    const twoFactorToken = await generateTwoFactorToken(existingUser.email);

    await sendTwoFactorAuthenticationEmail({
      email: twoFactorToken.email,
      token: twoFactorToken.token,
    });

    return { twoFactor: true };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email && otp) {
    const twoFactorToken = await prisma.twoFactorToken.findFirst({
      where: {
        email: existingUser.email,
      },
    });

    if (!twoFactorToken) {
      return { error: "Invalid otp" };
    }

    if (twoFactorToken.token !== otp) {
      return { error: "Invalid otp" };
    }

    const hasExpired = new Date(twoFactorToken.expires) < new Date();

    if (hasExpired) {
      return { error: "Code expired" };
    }

    await prisma.twoFactorToken.delete({
      where: { id: twoFactorToken.id },
    });

    const existingConfirmation = await prisma.twoFactorConfirmation.findUnique({
      where: { userId: existingUser.id },
    });

    if (existingConfirmation) {
      await prisma.twoFactorConfirmation.delete({
        where: { id: existingConfirmation.id },
      });
    }

    await prisma.twoFactorConfirmation.create({
      data: {
        userId: existingUser.id,
      },
    });
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
