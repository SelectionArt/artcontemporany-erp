// Types
import type { Session } from "next-auth";
import type { FetchPricingsReturn } from "../actions/types/dashboard.actions.types";

type DashboardProps = {
  children: React.ReactNode;
  pricings: FetchPricingsReturn;
  session: Session | null;
};

export type { DashboardProps };
