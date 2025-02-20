// Types
import type { UseFormReturn } from "react-hook-form";
import type { Pricing } from "../../types/pricings.container.types";
import type {
  IncrementSchema,
  PricingSchema,
} from "../../schemas/types/pricing.schema.types";
import type { PricingsHandlersReturn } from "../../handlers/types/pricings.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetHeaderActionsReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/pricings.hook.utils.types";

type PricingsHookProps = {
  initialData: Pricing[];
};

type PricingsHookReturn = Omit<
  PricingsHandlersReturn,
  | "handleApplyIncrement"
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
  | "handleUploadPricingsExcel"
> & {
  columns: GetColumnsConfigReturn<Pricing>;
  data: Pricing[];
  headerActionsProps: GetHeaderActionsReturn<Pricing>;
  incrementForm: UseFormReturn<IncrementSchema>;
  loadingIncrement: boolean;
  loadingPricing: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Pricing>;
  openAlert: boolean;
  openIncrementDialog: boolean;
  openPricingDialog: boolean;
  pricingForm: UseFormReturn<PricingSchema>;
  selectedRow: Pricing | null;
  selectedRows: Pricing[];
};

export type { PricingsHookProps, PricingsHookReturn };
