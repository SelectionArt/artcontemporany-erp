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

type BudgetEmailProps = {
  subject: string;
  message: string;
};

const BudgetEmail = ({
  subject,
  message,
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
