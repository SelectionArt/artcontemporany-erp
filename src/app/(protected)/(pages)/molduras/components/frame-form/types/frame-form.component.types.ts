// Types
import type { FramesProps } from "../../../types/frames.container.types";
import type { FrameSchema } from "../../../schemas/types/frame.schema.types";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";

type FrameFormProps = {
  existingImages: string[];
  filters: FramesProps["filters"];
  form: UseFormReturn<FrameSchema>;
  handleSubmit: (values: FrameSchema) => void;
  label: string;
  loading: boolean;
  newImages: File[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { FrameFormProps };
