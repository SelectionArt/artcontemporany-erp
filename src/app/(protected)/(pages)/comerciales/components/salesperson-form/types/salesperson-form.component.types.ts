// Types
import type { UseFormReturn } from "react-hook-form";
import type { SalespersonSchema } from "../../../schemas/types/salesperson.schema.types";

type SalespersonFormProps = {
  form: UseFormReturn<SalespersonSchema>;
  handleSubmit: (values: SalespersonSchema) => void;
  label: string;
  loading: boolean;
};

export type { SalespersonFormProps };
