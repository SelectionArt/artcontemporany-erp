// Vendors
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { LoginSchema } from "../../schemas/types/login.schema.types";

type LoginHandlersProps = {
  form: UseFormReturn<LoginSchema>;
  router: ReturnType<typeof useRouter>;
  setAlert: Dispatch<SetStateAction<AlertFormProps | null>>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
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
