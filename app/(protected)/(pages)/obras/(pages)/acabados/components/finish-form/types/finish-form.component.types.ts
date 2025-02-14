// Types
import type { UseFormReturn } from "react-hook-form";
import type { FinishSchema } from "@/app/(protected)/(pages)/obras/(pages)/acabados/schemas/types/finish.schema.types";

type FinishFormProps = {
  form: UseFormReturn<FinishSchema>;
  handleSubmit: (values: FinishSchema) => void;
  label: string;
  loading: boolean;
};

export type { FinishFormProps };
