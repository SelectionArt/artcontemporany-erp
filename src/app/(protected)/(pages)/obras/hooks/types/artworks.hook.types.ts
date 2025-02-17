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

type ArtworksHookProps = Pick<ArtworksProps, "artworks">;

type ArtworksHookReturn = Omit<
  ArtworksHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Artwork>;
  data: Artwork[];
  existingImages: string[];
  form: UseFormReturn<ArtworkSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Artwork>;
  newImages: File[];
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Artwork | null;
  selectedRows: Artwork[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { ArtworksHookProps, ArtworksHookReturn };
