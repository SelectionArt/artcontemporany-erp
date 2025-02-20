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

type GalleryHookReturn = Omit<GalleryHandlersReturn, "handleLoadMore"> & {
  filterConfig: GetFiltersConfigReturn[];
  filters: Record<string, Set<string>>;
  height: string;
  loading: boolean;
  loadMoreRef: React.RefObject<HTMLDivElement | null>;
  paginatedArtworks: GetFilteredArtworksReturn;
  searchTerm: string;
  selectedArtworks: FetchGalleryReturn["artworks"];
  totalArtworks: number;
  width: string;
};

export type { GalleryHookProps, GalleryHookReturn };
