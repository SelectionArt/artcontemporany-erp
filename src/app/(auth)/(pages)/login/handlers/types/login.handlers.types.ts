// Vendors
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { AuthStore } from "@/app/(auth)/stores/auth-provider/types/auth-provider.store.types";
import type { LoginSchema } from "../../schemas/types/login.schema.types";

type LoginHandlersProps = {
  form: UseFormReturn<LoginSchema>;
  router: ReturnType<typeof useRouter>;
  setAlert: Dispatch<SetStateAction<AlertFormProps | null>>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  setShowTwoFactor: Dispatch<SetStateAction<boolean>>;
  setLoading: AuthStore["setLoading"];
  showPassword: boolean;
};

type LoginHandlersReturn = {
  handleSubmit: (values: LoginSchema) => void;
  handleToggleShowPassword: VoidFunction;
};

type SubmitHandlerProps = Omit<
  LoginHandlersProps,
  "setShowPassword" | "showPassword"
> & {
  values: LoginSchema;
};

type ToggleShowPasswordHandlerProps = Pick<
  LoginHandlersProps,
  "setShowPassword" | "showPassword"
>;

export type {
  LoginHandlersProps,
  LoginHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
};
