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
import { ResetForm } from "./components/form/reset-form.component";
// Constants
import constants from "./constants/reset.constants";

export const metadata: Metadata = {
  title: "Reset",
  description: "Reset page",
};

const ResetPage = (): React.ReactElement => (
  <Card>
    <CardHeader>
      <CardTitle>{constants.CARD_TITLE}</CardTitle>
      <CardDescription>{constants.CARD_DESCRIPTION}</CardDescription>
    </CardHeader>

    <CardContent>
      <ResetForm />
    </CardContent>

    <CardFooter>
      <ButtonLink {...constants.BUTTON_LINK} />
    </CardFooter>
  </Card>
);

export default ResetPage;
