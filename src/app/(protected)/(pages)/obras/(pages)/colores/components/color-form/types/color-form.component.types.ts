// Types
import type { UseFormReturn } from "react-hook-form";
import type { ColorSchema } from "@/app/(protected)/(pages)/obras/(pages)/colores/schemas/types/color.schema.types";

type ColorFormProps = {
  form: UseFormReturn<ColorSchema>;
  handleSubmit: (values: ColorSchema) => void;
  label: string;
  loading: boolean;
};

export type { ColorFormProps };
