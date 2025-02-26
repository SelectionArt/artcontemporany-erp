import type { PricingItem } from "../../../../../types/budgets.container.types";
import type { UseFormReturn } from "react-hook-form";
import type { BudgetSchema } from "../../../../../schemas/types/budget.schema.types";

type GetPriceProps = {
  pricingItems: PricingItem[];
  width: number | string;
  height: number | string;
};

type GetPriceReturn = number;

type GetRoundedItemProps = {
  pricingItems: PricingItem[];
  width: number | string;
  height: number | string;
};

type GetRoundedItemReturn = {
  price: number;
  width: number;
  height: number;
  id: string;
};

type UpdatePriceProps = {
  form: UseFormReturn<BudgetSchema>;
  index: number;
  pricingItems: PricingItem[];
  pricingId: string | undefined;
  priceField: "artworkPrice" | "framePrice";
  width: number | string;
  height: number | string;
};

export type {
  GetPriceProps,
  GetPriceReturn,
  GetRoundedItemProps,
  GetRoundedItemReturn,
  UpdatePriceProps,
};
