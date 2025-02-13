// Types
import { NewPasswordFormValuesType } from "../../schemas/types/new-password.schema.types";

export type NewPasswordActionPropsType = {
  values: NewPasswordFormValuesType;
  token: string | null;
};
