// Types
import { NewPasswordSchema } from "../../schemas/types/new-password.schema.types";

export type NewPasswordActionPropsType = {
  values: NewPasswordSchema;
  token: string | null;
};
