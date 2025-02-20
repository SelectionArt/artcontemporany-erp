// Types
import type {
  IncrementSchema,
  PricingSchema,
} from "../../schemas/types/pricing.schema.types";
import { Pricing, Section } from "@prisma/client";

type ApplyIncrementProps = {
  ids: string[];
  values: IncrementSchema;
};

type CreatePricingProps = {
  slug: string;
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

type FetchPricingsProps = {
  slug: string;
};

type FetchPricingsReturn = Pricing[];

type FetchSectionProps = {
  slug: string;
};

type FetchSectionReturn = Section | null;

type UpdatePricingProps = {
  id: string;
  values: PricingSchema;
};

type UpdatePricingReturn = {
  pricing?: Pricing;
  error?: string;
  success?: string;
};

type UploadExcelProps = {
  slug: string;
  file: File;
};

type UploadExcelReturn = {
  success?: string;
  error?: string;
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
  FetchSectionProps,
  FetchSectionReturn,
  UpdatePricingProps,
  UpdatePricingReturn,
  UploadExcelProps,
  UploadExcelReturn,
};
