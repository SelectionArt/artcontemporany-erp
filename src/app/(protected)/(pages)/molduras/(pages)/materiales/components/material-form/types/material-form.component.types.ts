// Types
import type { UseFormReturn } from "react-hook-form";
import type { MaterialSchema } from "../../../schemas/types/material.schema.types";

type MaterialFormProps = {
  form: UseFormReturn<MaterialSchema>;
  handleSubmit: (values: MaterialSchema) => void;
  label: string;
  loading: boolean;
};

export type { MaterialFormProps };
