// Types
import type { Session } from "next-auth";
import type { FetchSectionsReturn } from "../actions/types/dashboard.actions.types";

type DashboardProps = {
  children: React.ReactNode;
  pricingSections: FetchSectionsReturn;
  session: Session | null;
};

export type { DashboardProps };
