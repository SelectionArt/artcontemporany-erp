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
import { Content } from "./components/content/content.component";
// Constants
import constants from "./constants/verification.constants";

export const metadata: Metadata = {
  title: "Verification",
  description: "Verification page",
};

const VerificationPage = (): React.ReactElement => (
  <Card>
    <CardHeader>
      <CardTitle>{constants.CARD_TITLE}</CardTitle>
      <CardDescription>{constants.CARD_DESCRIPTION}</CardDescription>
    </CardHeader>

    <CardContent>
      <Content />
    </CardContent>

    <CardFooter>
      <ButtonLink {...constants.BUTTON_LINK} />
    </CardFooter>
  </Card>
);

export default VerificationPage;
