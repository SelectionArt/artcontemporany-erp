// Vendors
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

type ResetPasswordEmailProps = {
  token: string;
};

const constants = {
  previewText: "Password reset",
  title: "Password reset",
  button: "Reset your password",
  firstParagraph:
    "If you requested a password reset, click the button below. This link will expire in 1 hour.",
  secondParagraph: "Or copy and paste the following link into your browser:",
  footer:
    "If you didn't request this email, you can safely ignore it. Only a person with access to your email can reset your account password.",
} as const;

const domain = process.env.NEXT_PUBLIC_APP_URL;

const ResetPasswordEmail = ({ token }: ResetPasswordEmailProps) => {
  const link = `${domain}/new-password?token=${token}`;

  return (
    <Html>
      <Head />
      <Preview>{constants.previewText}</Preview>
      <Tailwind>
        <Body className="m-0 bg-slate-50 p-4 font-sans">
          <Container className="max-w-lg rounded-lg bg-white p-8">
            <Section>
              <Text className="text-3xl font-semibold text-slate-700">
                {constants.title}
              </Text>
              <Text className="text-lg text-slate-700">
                {constants.firstParagraph}
              </Text>
            </Section>

            <Section className="mt-6">
              <Button
                className="text-md flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-slate-700 px-4 font-medium text-white"
                href={link}
              >
                {constants.button}
              </Button>
            </Section>

            <Section className="mt-6">
              <Text className="text-lg text-slate-700">
                {constants.secondParagraph} <br />
                <Link href={link}>{link}</Link>
              </Text>
            </Section>

            <Hr className="my-4 border-t border-slate-300" />

            <Section>
              <Text className="text-sm text-slate-400">{constants.footer}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export { ResetPasswordEmail };
