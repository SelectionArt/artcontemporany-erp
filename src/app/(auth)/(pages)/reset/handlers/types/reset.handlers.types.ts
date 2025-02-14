// Vendors
import { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { ResetSchema } from "../../schemas/types/reset.schema.types";

type ResetHandlersProps = {
  form: UseFormReturn<ResetSchema>;
  setAlert: Dispatch<SetStateAction<AlertFormProps | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

type ResetHandlersReturn = {
  handleSubmit: (values: ResetSchema) => void;
};

type SubmitHandlerProps = ResetHandlersProps & {
  values: ResetSchema;
};

export type { ResetHandlersProps, ResetHandlersReturn, SubmitHandlerProps };
