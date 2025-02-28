// Types
import type { Session } from "next-auth";
import type { FetchPricingsReturn } from "../../../actions/types/dashboard.actions.types";

type SidebarProps = {
  open: boolean;
  pricings: FetchPricingsReturn;
  session: Session | null;
};

export type { SidebarProps };
