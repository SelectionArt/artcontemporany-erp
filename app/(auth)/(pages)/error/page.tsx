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
// Constants
import constants from "./constants/error.constants";
// Icons
import { TriangleAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Error",
  description: "Error page",
};

const AuthErrorPage = (): React.ReactElement => (
  <Card>
    <CardHeader>
      <CardTitle>{constants.CARD_TITLE}</CardTitle>
      <CardDescription>{constants.CARD_DESCRIPTION}</CardDescription>
    </CardHeader>

    <CardContent>
      <div className="flex w-full items-center justify-center">
        <TriangleAlert size={48} className="text-destructive" />
      </div>
    </CardContent>

    <CardFooter>
      <ButtonLink {...constants.BUTTON_LINK} />
    </CardFooter>
  </Card>
);

export default AuthErrorPage;
