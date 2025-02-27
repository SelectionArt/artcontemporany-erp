// Types
import type { UseFormReturn } from "react-hook-form";
import type { UserSchema } from "../../../schemas/types/user.schema.types";

type UserFormProps = {
  form: UseFormReturn<UserSchema>;
  handleSubmit: (values: UserSchema) => void;
  label: string;
  loading: boolean;
};

export type { UserFormProps };
