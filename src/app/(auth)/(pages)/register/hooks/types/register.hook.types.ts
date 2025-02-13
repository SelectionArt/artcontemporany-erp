// Vendors
import type { UseFormReturn } from "react-hook-form";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { AuthStore } from "@/app/(auth)/stores/auth-provider/types/auth-provider.store.types";
import type { RegisterSchema } from "../../schemas/types/register.schema.types";

type RegisterHookReturn = {
  alert: AlertFormProps | null;
  form: UseFormReturn<RegisterSchema>;
  handleSubmit: (values: RegisterSchema) => void;
  handleToggleShowPassword: VoidFunction;
  loading: AuthStore["loading"];
  showPassword: boolean;
};

export type { RegisterHookReturn };
