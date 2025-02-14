// Vendors
import { Resend } from "resend";
// Templates
import { ResetPasswordEmail } from "../../templates/reset-password-email.template";
// Types
import { SendResetPasswordEmailPropsType } from "./types/send-reset-password-email-props.type";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendResetPasswordEmail = async ({
  // email,
  token,
}: SendResetPasswordEmailPropsType): Promise<void> => {
  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "Reset your password",
    react: <ResetPasswordEmail token={token} />,
  });
};

export { sendResetPasswordEmail };
