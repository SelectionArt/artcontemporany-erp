// Types
import type { FetchPricingsReturn } from "../../../actions/types/dashboard.actions.types";

type SidebarProps = {
  open: boolean;
  pricings: FetchPricingsReturn;
};

export type { SidebarProps };
