// Types
import type { AlertFormProps } from "@/components/ui/alert-form";

type VerificationHookReturn = {
  alert: AlertFormProps | null;
  loading: boolean;
};

export type { VerificationHookReturn };
