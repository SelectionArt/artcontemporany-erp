// Vendors
import type { UseFormReturn } from "react-hook-form";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { RegisterSchema } from "../../schemas/types/register.schema.types";

type RegisterHookReturn = {
  alert: AlertFormProps | null;
  form: UseFormReturn<RegisterSchema>;
  handleSubmit: (values: RegisterSchema) => void;
  handleToggleShowPassword: VoidFunction;
  loading: boolean;
  showPassword: boolean;
};

export type { RegisterHookReturn };
