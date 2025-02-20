// Types
import type { Dispatch, SetStateAction } from "react";
import type { Artwork, Artworks } from "../../types/gallery.container.types";

type GalleryHandlersProps = {
  hasMore: boolean;
  loading: boolean;
  selectedArtworks: Artworks;
  setFilters: Dispatch<SetStateAction<Record<string, Set<string>>>>;
  setHeight: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setPage: Dispatch<SetStateAction<number>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setSelectedArtworks: Dispatch<SetStateAction<Artworks>>;
  setWidth: Dispatch<SetStateAction<string>>;
};

type GalleryHandlersReturn = {
  handleDownloadClick(): void;
  handleFilterChange({
    key,
    newValues,
  }: {
    key: string;
    newValues: Set<string>;
  }): void;
  handleHeightChange(event: React.ChangeEvent<HTMLInputElement>): void;
  handleLoadMore(): void;
  handleSearchChange(event: React.ChangeEvent<HTMLInputElement>): void;
  handleArtworkSelect({
    artwork,
    checked,
  }: {
    artwork: Artwork;
    checked: string | boolean;
  }): void;
  handleWidthChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

type ArtworkSelectHandlerProps = Pick<
  GalleryHandlersProps,
  "setSelectedArtworks"
> & {
  artwork: Artwork;
  checked: string | boolean;
};

type DownloadClickHandlerProps = Pick<GalleryHandlersProps, "selectedArtworks">;

type FilterChangeHandlerProps = Pick<GalleryHandlersProps, "setFilters"> & {
  key: string;
  newValues: Set<string>;
};

type HeightChangeHandlerProps = Pick<GalleryHandlersProps, "setHeight"> & {
  event: React.ChangeEvent<HTMLInputElement>;
};

type LoadMoreHandlerProps = Pick<
  GalleryHandlersProps,
  "hasMore" | "loading" | "setLoading" | "setPage"
>;

type SearchChangeHandlerProps = Pick<GalleryHandlersProps, "setSearchTerm"> & {
  event: React.ChangeEvent<HTMLInputElement>;
};

type WidthChangeHandlerProps = Pick<GalleryHandlersProps, "setWidth"> & {
  event: React.ChangeEvent<HTMLInputElement>;
};

export type {
  ArtworkSelectHandlerProps,
  DownloadClickHandlerProps,
  FilterChangeHandlerProps,
  GalleryHandlersProps,
  GalleryHandlersReturn,
  HeightChangeHandlerProps,
  LoadMoreHandlerProps,
  SearchChangeHandlerProps,
  WidthChangeHandlerProps,
};
