// Types
import type { UseFormReturn } from "react-hook-form";
import type { SectionSchema } from "../../../schemas/types/section.schema.types";

type SectionFormProps = {
  form: UseFormReturn<SectionSchema>;
  handleSubmit: (values: SectionSchema) => void;
  label: string;
  loading: boolean;
};

export type { SectionFormProps };
