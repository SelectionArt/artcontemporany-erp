// Types
import type { UseFormReturn } from "react-hook-form";
import type { FormatSchema } from "@/app/(protected)/(pages)/obras/(pages)/formatos/schemas/types/format.schema.types";

type FormatFormProps = {
  form: UseFormReturn<FormatSchema>;
  handleSubmit: (values: FormatSchema) => void;
  label: string;
  loading: boolean;
};

export type { FormatFormProps };
