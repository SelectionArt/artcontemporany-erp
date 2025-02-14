// Types
import type { RegisterSchema } from "../../schemas/types/register.schema.types";

type RegisterActionProps = {
  values: RegisterSchema;
};

type RegisterActionReturn = {
  error?: string;
  success?: string;
};

export type { RegisterActionProps, RegisterActionReturn };
