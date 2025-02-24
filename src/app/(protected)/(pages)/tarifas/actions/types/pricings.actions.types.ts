// Types
import type { Pricing } from "../../types/pricings.container.types";
import type { PricingSchema } from "../../schemas/types/pricing.schema.types";

type CreatePricingProps = {
  values: PricingSchema;
};

type CreatePricingReturn = {
  pricing?: Pricing;
  error?: string;
  success?: string;
};

type DeletePricingProps = {
  id: string;
};

type DeletePricingReturn = {
  success?: string;
  error?: string;
};

type DeleteMultiplePricingsProps = {
  ids: string[];
};

type DeleteMultiplePricingsReturn = {
  success?: string;
  error?: string;
};

type FetchPricingsReturn = Pricing[];

type UpdatePricingProps = {
  id: string;
  values: PricingSchema;
};

type UpdatePricingReturn = {
  pricing?: Pricing;
  error?: string;
  success?: string;
};

export type {
  CreatePricingProps,
  CreatePricingReturn,
  DeletePricingProps,
  DeletePricingReturn,
  DeleteMultiplePricingsProps,
  DeleteMultiplePricingsReturn,
  FetchPricingsReturn,
  UpdatePricingProps,
  UpdatePricingReturn,
};
