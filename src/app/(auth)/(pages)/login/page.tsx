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
import { LoginForm } from "./components/form/login-form.component";
// Constants
import constants from "./constants/login.constants";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

const LoginPage = () => (
  <Card>
    <CardHeader>
      <CardTitle>{constants.CARD_TITLE}</CardTitle>
      <CardDescription>{constants.CARD_DESCRIPTION}</CardDescription>
    </CardHeader>

    <CardContent>
      <AuthProviderButtons />
      <CardSeparator>{constants.CARD_SEPARATOR}</CardSeparator>
      <LoginForm />
    </CardContent>

    <CardFooter>
      <ButtonLink {...constants.BUTTON_LINK} />
    </CardFooter>
  </Card>
);

export default LoginPage;
