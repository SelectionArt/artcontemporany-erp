// Vendors
import { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { AuthStore } from "@/app/(auth)/stores/auth-provider/types/auth-provider.store.types";
import type { RegisterSchema } from "../../schemas/types/register.schema.types";

type RegisterHandlersProps = {
  form: UseFormReturn<RegisterSchema>;
  setAlert: Dispatch<SetStateAction<AlertFormProps | null>>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  setLoading: AuthStore["setLoading"];
  showPassword: boolean;
};

type RegisterHandlersReturn = {
  handleSubmit: (values: RegisterSchema) => void;
  handleToggleShowPassword: VoidFunction;
};

type SubmitHandlerProps = Omit<
  RegisterHandlersProps,
  "setShowPassword" | "showPassword"
> & {
  values: RegisterSchema;
};

type ToggleShowPasswordHandlerProps = Pick<
  RegisterHandlersProps,
  "setShowPassword" | "showPassword"
>;

export type {
  RegisterHandlersProps,
  RegisterHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
};
