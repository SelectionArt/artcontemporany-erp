// Types
import type { UseFormReturn } from "react-hook-form";
import type { Artist } from "../../types/artists.container.types";
import type { ArtistSchema } from "../../schemas/types/artist.schema.types";
import type { ArtistsHandlersReturn } from "../../handlers/types/artists.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/artists.hook.utils.types";

type ArtistsHookProps = {
  initialData: Artist[];
};

type ArtistsHookReturn = Omit<
  ArtistsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Artist>;
  data: Artist[];
  form: UseFormReturn<ArtistSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Artist>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Artist | null;
  selectedRows: Artist[];
};

export type { ArtistsHookProps, ArtistsHookReturn };
