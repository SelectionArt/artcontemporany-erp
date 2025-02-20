// Types
import type { UseFormReturn } from "react-hook-form";
import type { IncrementSchema } from "../../../schemas/types/pricing.schema.types";

type IncrementFormProps = {
  form: UseFormReturn<IncrementSchema>;
  handleSubmit: (values: IncrementSchema) => void;
  label: string;
  loading: boolean;
};

export type { IncrementFormProps };
