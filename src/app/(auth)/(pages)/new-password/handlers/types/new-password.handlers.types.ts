// Vendors
import { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { NewPasswordSchema } from "../../schemas/types/new-password.schema.types";

type NewPasswordHandlersProps = {
  form: UseFormReturn<NewPasswordSchema>;
  setAlert: Dispatch<SetStateAction<AlertFormProps | null>>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
  token: string | null;
};

type NewPasswordHandlersReturn = {
  handleSubmit: (values: NewPasswordSchema) => void;
  handleToggleShowPassword: VoidFunction;
};

type SubmitHandlerProps = Omit<
  NewPasswordHandlersProps,
  "setShowPassword" | "showPassword"
> & {
  values: NewPasswordSchema;
};

type ToggleShowPasswordHandlerProps = Pick<
  NewPasswordHandlersProps,
  "setShowPassword" | "showPassword"
>;

export type {
  NewPasswordHandlersProps,
  NewPasswordHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
};
