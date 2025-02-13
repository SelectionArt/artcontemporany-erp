// Types
import type { ResetSchema } from "../../schemas/types/reset.schema.types";

type ResetActionProps = {
  values: ResetSchema;
};

type ResetActionReturn = {
  error?: string;
  success?: string;
};

export type { ResetActionProps, ResetActionReturn };
