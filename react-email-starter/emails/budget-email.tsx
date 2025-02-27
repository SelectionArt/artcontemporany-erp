// Vendors
import {
  Body,
  Button,
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

type BudgetEmailProps = {
  recipientEmail: string;
  subject: string;
  message: string;
  downloadLink?: string;
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

const BudgetEmail = ({
  recipientEmail,
  subject,
  message,
  downloadLink,
}: BudgetEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Tailwind>
        <Body className="m-0 bg-slate-50 p-4 font-sans">
          <Container className="max-w-lg rounded-lg bg-white p-8 shadow-lg">
            <Section>
              <Text className="text-3xl font-semibold text-slate-700">
                {subject}
              </Text>
              <Text className="text-lg whitespace-pre-line text-slate-700">
                {message}
              </Text>
            </Section>

            <Hr className="my-4 border-t border-slate-300" />

            <Section>
              <Text className="text-sm text-slate-400">
                Si tiene alguna consulta, no dude en responder a este correo.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default BudgetEmail;
