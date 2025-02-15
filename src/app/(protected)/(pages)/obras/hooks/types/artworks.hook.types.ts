// Types
import type { Artwork } from "../../types/artworks.container.types";
import type { ArtworkSchema } from "../../schemas/types/artwork.schema.types";
import type { ArtworksHandlersReturn } from "../../handlers/types/artworks.handlers.types";
import type { ArtworksProps } from "../../types/artworks.container.types";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/artworks.hook.utils.types";

type ArtworksHookProps = ArtworksProps;

type ArtworksHookReturn = Omit<
  ArtworksHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Artwork>;
  data: Artwork[];
  form: UseFormReturn<ArtworkSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Artwork>;
  openAlert: boolean;
  openDialog: boolean;
  previews: string[];
  selectedRow: Artwork | null;
  selectedRows: Artwork[];
  setPreviews: Dispatch<SetStateAction<string[]>>;
};

export type { ArtworksHookProps, ArtworksHookReturn };
