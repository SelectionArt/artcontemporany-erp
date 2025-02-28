import type { PricingItem } from "../../../../../../types/budgets.container.types";

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

export type {
  GetPriceProps,
  GetPriceReturn,
  GetRoundedItemProps,
  GetRoundedItemReturn,
};
