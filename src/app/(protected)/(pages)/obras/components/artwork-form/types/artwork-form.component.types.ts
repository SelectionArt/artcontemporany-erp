// Types
import type { ArtworksProps } from "../../../types/artworks.container.types";
import type { ArtworkSchema } from "../../../schemas/types/artwork.schema.types";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";

type ArtworkFormProps = {
  existingImages: string[];
  filters: ArtworksProps["filters"];
  form: UseFormReturn<ArtworkSchema>;
  handleSubmit: (values: ArtworkSchema) => void;
  label: string;
  loading: boolean;
  newImages: File[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { ArtworkFormProps };
