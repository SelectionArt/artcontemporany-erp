// Vendors
import type { Metadata } from "next";
// Components
import { ButtonLink } from "@/components/ui/button-link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NewPasswordForm } from "./components/form/new-password-form.component";
// Constants
import constants from "./constants/new-password.constants";

export const metadata: Metadata = {
  title: "New password",
  description: "New password page",
};

const NewPasswordPage = () => (
  <Card>
    <CardHeader>
      <CardTitle>{constants.CARD_TITLE}</CardTitle>
      <CardDescription>{constants.CARD_DESCRIPTION}</CardDescription>
    </CardHeader>

    <CardContent>
      <NewPasswordForm />
    </CardContent>

    <CardFooter>
      <ButtonLink {...constants.BUTTON_LINK} />
    </CardFooter>
  </Card>
);

export default NewPasswordPage;
