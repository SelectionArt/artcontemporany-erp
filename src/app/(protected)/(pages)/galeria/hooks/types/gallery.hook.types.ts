// Types
import type { FetchGalleryReturn } from "../../actions/types/gallery.actions.types";
import {
  GetFiltersConfigReturn,
  GetFilteredArtworksReturn,
} from "../utils/types/artworks.hook.utils.types";
import type { GalleryHandlersReturn } from "../../handlers/types/gallery.handlers.types";

type GalleryHookProps = {
  gallery: FetchGalleryReturn;
};

type GalleryHookReturn = GalleryHandlersReturn & {
  filterConfig: GetFiltersConfigReturn[];
  filteredArtworks: GetFilteredArtworksReturn;
  filters: Record<string, Set<string>>;
  height: string;
  searchTerm: string;
  width: string;
};

export type { GalleryHookProps, GalleryHookReturn };
