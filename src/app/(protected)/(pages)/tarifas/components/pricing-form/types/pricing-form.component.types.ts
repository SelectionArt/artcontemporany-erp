// Types
import type { UseFormReturn } from "react-hook-form";
import type { PricingSchema } from "../../../schemas/types/pricing.schema.types";

type PricingFormProps = {
  form: UseFormReturn<PricingSchema>;
  handleSubmit: (values: PricingSchema) => void;
  label: string;
  loading: boolean;
};

export type { PricingFormProps };
