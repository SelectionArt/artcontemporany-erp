// Types
import type {
  IncrementSchema,
  PricingSchema,
} from "../../schemas/types/pricing.schema.types";
import { Pricing, PricingItem } from "@prisma/client";

type ApplyIncrementProps = {
  ids: string[];
  values: IncrementSchema;
};

type CreatePricingProps = {
  id: string;
  values: PricingSchema;
};

type CreatePricingReturn = {
  pricing?: PricingItem;
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

type FetchPricingsProps = {
  id: string;
};

type FetchPricingsReturn = PricingItem[];

type FetchPricingProps = {
  id: string;
};

type FetchPricingReturn = Pricing | null;

type UpdatePricingProps = {
  id: string;
  values: PricingSchema;
};

type UpdatePricingReturn = {
  pricing?: PricingItem;
  error?: string;
  success?: string;
};

type UploadExcelProps = {
  id: string;
  file: File;
};

type UploadExcelReturn = {
  success?: string;
  error?: string;
  pricings?: PricingItem[];
};

export type {
  ApplyIncrementProps,
  CreatePricingProps,
  CreatePricingReturn,
  DeletePricingProps,
  DeletePricingReturn,
  DeleteMultiplePricingsProps,
  DeleteMultiplePricingsReturn,
  FetchPricingsProps,
  FetchPricingsReturn,
  FetchPricingProps,
  FetchPricingReturn,
  UpdatePricingProps,
  UpdatePricingReturn,
  UploadExcelProps,
  UploadExcelReturn,
};
