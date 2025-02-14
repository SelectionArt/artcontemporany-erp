// Vendors
import type { Metadata } from "next";
// Components
import { AuthProviderButtons } from "../../components/auth-provider-buttons/auth-provider-buttons.component";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardSeparator,
  CardTitle,
} from "@/components/ui/card";
import { RegisterForm } from "./components/form/register-form.component";
// Constants
import constants from "./constants/register.constants";

export const metadata: Metadata = {
  title: "Register",
  description: "Register page",
};

const RegisterPage = () => (
  <Card>
    <CardHeader>
      <CardTitle>{constants.CARD_TITLE}</CardTitle>
      <CardDescription>{constants.CARD_DESCRIPTION}</CardDescription>
    </CardHeader>

    <CardContent>
      <AuthProviderButtons />
      <CardSeparator>{constants.CARD_SEPARATOR}</CardSeparator>
      <RegisterForm />
    </CardContent>

    <CardFooter>
      <ButtonLink {...constants.BUTTON_LINK} />
    </CardFooter>
  </Card>
);

export default RegisterPage;
