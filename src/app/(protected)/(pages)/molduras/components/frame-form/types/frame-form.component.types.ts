// Types
import type { UseFormReturn } from "react-hook-form";
import type { FrameSchema } from "../../../schemas/types/frame.schema.types";

type FrameFormProps = {
  form: UseFormReturn<FrameSchema>;
  handleSubmit: (values: FrameSchema) => void;
  label: string;
  loading: boolean;
};

export type { FrameFormProps };
