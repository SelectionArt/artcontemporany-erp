// Vendors
import type { Metadata } from "next";
// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Content } from "./components/content/content.component";
// Constants
import constants from "./constants/logout.constants";

export const metadata: Metadata = {
  title: "Logout",
  description: "Logout page",
};

const LogoutPage = () => (
  <Card>
    <CardHeader>
      <CardTitle>{constants.CARD_TITLE}</CardTitle>
      <CardDescription>{constants.CARD_DESCRIPTION}</CardDescription>
    </CardHeader>

    <CardContent>
      <Content />
    </CardContent>
  </Card>
);

export default LogoutPage;
