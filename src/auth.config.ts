// Vendors
import { CredentialsSignin } from "next-auth";
import bcryptjs from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { loginSchema } from "@/app/(auth)/(pages)/login/schemas/login.schema";

class CustomAuthError extends CredentialsSignin {
  constructor(code: string) {
    super();
    this.message = code;
    this.stack = undefined;
  }
}

export default {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = await loginSchema.parseAsync(credentials);

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !user.password) {
          throw new CustomAuthError("Invalid credentials");
        }

        const passwordMatch = await bcryptjs.compare(password, user.password);

        if (!passwordMatch) {
          throw new CustomAuthError("Invalid credentials");
        }

        return user;
      },
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
