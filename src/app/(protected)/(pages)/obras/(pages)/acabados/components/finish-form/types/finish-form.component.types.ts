// Types
import type { UseFormReturn } from "react-hook-form";
import type { FinishSchema } from "../../../schemas/types/finish.schema.types";

type FinishFormProps = {
  form: UseFormReturn<FinishSchema>;
  handleSubmit: (values: FinishSchema) => void;
  label: string;
  loading: boolean;
};

export type { FinishFormProps };
