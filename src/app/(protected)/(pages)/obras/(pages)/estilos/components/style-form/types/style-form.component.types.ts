// Types
import type { UseFormReturn } from "react-hook-form";
import type { StyleSchema } from "../../../schemas/types/style.schema.types";

type StyleFormProps = {
  form: UseFormReturn<StyleSchema>;
  handleSubmit: (values: StyleSchema) => void;
  label: string;
  loading: boolean;
};

export type { StyleFormProps };
