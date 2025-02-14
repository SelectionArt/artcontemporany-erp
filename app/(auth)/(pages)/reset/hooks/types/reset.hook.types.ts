// Vendors
import type { UseFormReturn } from "react-hook-form";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { ResetSchema } from "../../schemas/types/reset.schema.types";

type ResetHookReturn = {
  alert: AlertFormProps | null;
  form: UseFormReturn<ResetSchema>;
  handleSubmit: (values: ResetSchema) => void;
  loading: boolean;
};

export type { ResetHookReturn };
