// Types
import type { UseFormReturn } from "react-hook-form";
import type { ManufacturerSchema } from "../../../schemas/types/manufacturer.schema.types";

type ManufacturerFormProps = {
  form: UseFormReturn<ManufacturerSchema>;
  handleSubmit: (values: ManufacturerSchema) => void;
  label: string;
  loading: boolean;
};

export type { ManufacturerFormProps };
