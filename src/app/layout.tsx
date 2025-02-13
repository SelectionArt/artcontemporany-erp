// Vendors
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
// Auth
import { auth } from "@/auth";
// Components
import { Toaster } from "@/components/ui/sonner";
// Fonts
import { Inter } from "next/font/google";
// Providers
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
// Styles
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next ERP",
  description: "Generic ERP built with Next.js",
};

async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body className={`flex min-h-dvh antialiased ${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
}

export default RootLayout;
