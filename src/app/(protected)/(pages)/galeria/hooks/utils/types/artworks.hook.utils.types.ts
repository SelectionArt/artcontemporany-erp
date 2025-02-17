// Types
import type { FetchGalleryReturn } from "../../../actions/types/gallery.actions.types";

type ArtworkrKeys =
  | "artist"
  | "color"
  | "finish"
  | "format"
  | "style"
  | "support";

type FilterOption = {
  id: string;
  name: string;
  hex?: string;
};

type GetFiltersConfigProps = {
  gallery: FetchGalleryReturn;
};

type GetFiltersConfigReturn = {
  key: string;
  title: string;
  artworkKey: ArtworkrKeys;
  options: FilterOption[];
  mapOptions: (options: FilterOption[]) => {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
};

type GetFilteredArtworksProps = {
  gallery: FetchGalleryReturn;
  filterConfig: GetFiltersConfigReturn[];
  filters: Record<string, Set<string>>;
  height: string;
  searchTerm: string;
  width: string;
};

type GetFilteredArtworksReturn = FetchGalleryReturn["artworks"];

export type {
  GetFiltersConfigProps,
  GetFiltersConfigReturn,
  GetFilteredArtworksProps,
  GetFilteredArtworksReturn,
};
