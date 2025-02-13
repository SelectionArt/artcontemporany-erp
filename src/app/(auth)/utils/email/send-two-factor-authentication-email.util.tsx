// Vendors
import { Resend } from "resend";
// Templates
import { TwoFactorAuthenticationEmail } from "../../templates/two-factor-authentication-email.template";
// Types
import { SendTwoFactorTokenEmailPropsType } from "./types/send-two-factor-token-email-props.type";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendTwoFactorAuthenticationEmail = async ({
  // email,
  token,
}: SendTwoFactorTokenEmailPropsType): Promise<void> => {
  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "2FA Authentication",
    react: <TwoFactorAuthenticationEmail token={token} />,
  });
};

export { sendTwoFactorAuthenticationEmail };
