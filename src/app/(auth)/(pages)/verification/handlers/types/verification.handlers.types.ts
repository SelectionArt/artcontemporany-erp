// Vendors
import { Dispatch, SetStateAction } from "react";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";

type VerificationHandlersProps = {
  setAlert: Dispatch<SetStateAction<AlertFormProps | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  token: string | null;
};

type VerificationHandlersReturn = {
  handleLoad: VoidFunction;
};

type LoadHandlerProps = VerificationHandlersProps;

export type {
  VerificationHandlersProps,
  VerificationHandlersReturn,
  LoadHandlerProps,
};
