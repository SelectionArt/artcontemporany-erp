// Types
import type { UseFormReturn } from "react-hook-form";
import type { ArtistSchema } from "@/app/(protected)/(pages)/artistas/schemas/types/artist.schema.types";

type ArtistFormProps = {
  form: UseFormReturn<ArtistSchema>;
  handleSubmit: (values: ArtistSchema) => void;
  label: string;
  loading: boolean;
};

export type { ArtistFormProps };
