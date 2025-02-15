// Vendors
import { Resend } from "resend";
// Templates
import { VerificationTokenEmail } from "../../templates/verification-token-email.template";
// Types
import { SendVerificationTokenEmailPropsType } from "./types/send-verification-token-email-props.type";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendVerificationTokenEmail = async ({
  email,
  token,
}: SendVerificationTokenEmailPropsType): Promise<void> => {
  await resend.emails.send({
    from: "noreply@gesartcontemporany.com",
    to: email,
    subject: "Confirm your email",
    react: <VerificationTokenEmail token={token} email={email} />,
  });
};

export { sendVerificationTokenEmail };
