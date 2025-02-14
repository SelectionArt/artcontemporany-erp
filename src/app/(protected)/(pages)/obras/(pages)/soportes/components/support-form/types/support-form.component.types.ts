// Types
import type { UseFormReturn } from "react-hook-form";
import type { SupportSchema } from "../../../schemas/types/support.schema.types";

type SupportFormProps = {
  form: UseFormReturn<SupportSchema>;
  handleSubmit: (values: SupportSchema) => void;
  label: string;
  loading: boolean;
};

export type { SupportFormProps };
