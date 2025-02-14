// Vendors
import type { UseFormReturn } from "react-hook-form";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { LoginSchema } from "../../schemas/types/login.schema.types";

type LoginHookReturn = {
  alert: AlertFormProps | null;
  form: UseFormReturn<LoginSchema>;
  handleSubmit: (values: LoginSchema) => void;
  handleToggleShowPassword: VoidFunction;
  loading: boolean;
  showPassword: boolean;
};

export type { LoginHookReturn };
