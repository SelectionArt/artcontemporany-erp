// Types
import type { UseFormReturn } from "react-hook-form";
import type { Pricing } from "../../types/pricings.container.types";
import type { PricingSchema } from "../../schemas/types/pricing.schema.types";
import type { PricingsHandlersReturn } from "../../handlers/types/pricings.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/pricings.hook.utils.types";

type PricingsHookProps = {
  initialData: Pricing[];
};

type PricingsHookReturn = Omit<
  PricingsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Pricing>;
  data: Pricing[];
  form: UseFormReturn<PricingSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Pricing>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Pricing | null;
  selectedRows: Pricing[];
};

export type { PricingsHookProps, PricingsHookReturn };
