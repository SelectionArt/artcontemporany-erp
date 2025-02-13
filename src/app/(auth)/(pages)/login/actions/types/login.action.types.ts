// Types
import type { LoginSchema } from "../../schemas/types/login.schema.types";

type LoginActionProps = {
  values: LoginSchema;
};

type LoginActionReturn = {
  error?: string;
  success?: string;
  twoFactor?: boolean;
};

export type { LoginActionProps, LoginActionReturn };
