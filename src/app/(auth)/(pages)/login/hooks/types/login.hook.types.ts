// Vendors
import type { UseFormReturn } from "react-hook-form";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { AuthStore } from "@/app/(auth)/stores/auth-provider/types/auth-provider.store.types";
import type { LoginSchema } from "../../schemas/types/login.schema.types";

type LoginHookReturn = {
  alert: AlertFormProps | null;
  form: UseFormReturn<LoginSchema>;
  handleSubmit: (values: LoginSchema) => void;
  handleToggleShowPassword: VoidFunction;
  loading: AuthStore["loading"];
  showPassword: boolean;
  showTwoFactor: boolean;
};

export type { LoginHookReturn };
