// Vendors
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

type TwoFactorAuthenticationProps = {
  token: string;
};

const constants = {
  previewText: "Secure your account with two-factor authentication",
  title: "Secure your account with two-factor authentication",
  firstParagraph:
    "To enchance the security of your account, we require two-factor authentication for access. Here is your 2FA code:",
  secondParagraph: "Code expires in 5 minutes.",
  thirdParagraph:
    "Please enter this code in the login prompt to access your account.",
  footer: "If you didn't request this email, you can safely ignore it.",
} as const;

const TwoFactorAuthenticationEmail = ({
  token,
}: TwoFactorAuthenticationProps) => {
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

            <Section className="mt-6 rounded-lg bg-slate-50">
              <Text className="text-center text-5xl font-medium tracking-widest text-slate-700">
                {token}
              </Text>
              <Text className="text-center text-lg text-slate-500">
                {constants.secondParagraph}
              </Text>
            </Section>

            <Section className="mt-6">
              <Text className="text-lg text-slate-700">
                {constants.thirdParagraph}
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

export { TwoFactorAuthenticationEmail };
