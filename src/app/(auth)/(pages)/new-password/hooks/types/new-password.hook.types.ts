// Vendors
import type { UseFormReturn } from "react-hook-form";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { NewPasswordSchema } from "../../schemas/types/new-password.schema.types";

type NewPasswordHookReturn = {
  alert: AlertFormProps | null;
  form: UseFormReturn<NewPasswordSchema>;
  handleSubmit: (values: NewPasswordSchema) => void;
  handleToggleShowPassword: VoidFunction;
  loading: boolean;
  showPassword: boolean;
};

export type { NewPasswordHookReturn };
