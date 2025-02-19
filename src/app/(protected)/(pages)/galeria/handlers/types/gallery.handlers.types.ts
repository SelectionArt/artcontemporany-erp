// Types
import type { Dispatch, SetStateAction } from "react";
import type { Artwork, Artworks } from "../../types/gallery.container.types";

type GalleryHandlersProps = {
  selectedArtworks: Artworks;
  setFilters: Dispatch<SetStateAction<Record<string, Set<string>>>>;
  setHeight: Dispatch<SetStateAction<string>>;
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

type DownloadClickHandlerProps = Pick<GalleryHandlersProps, "selectedArtworks">;

type FilterChangeHandlerProps = Pick<GalleryHandlersProps, "setFilters"> & {
  key: string;
  newValues: Set<string>;
};

type HeightChangeHandlerProps = Pick<GalleryHandlersProps, "setHeight"> & {
  event: React.ChangeEvent<HTMLInputElement>;
};

type SearchChangeHandlerProps = Pick<GalleryHandlersProps, "setSearchTerm"> & {
  event: React.ChangeEvent<HTMLInputElement>;
};

type ArtworkSelectHandlerProps = Pick<
  GalleryHandlersProps,
  "setSelectedArtworks"
> & {
  artwork: Artwork;
  checked: string | boolean;
};

type WidthChangeHandlerProps = Pick<GalleryHandlersProps, "setWidth"> & {
  event: React.ChangeEvent<HTMLInputElement>;
};

export type {
  DownloadClickHandlerProps,
  GalleryHandlersProps,
  GalleryHandlersReturn,
  FilterChangeHandlerProps,
  HeightChangeHandlerProps,
  SearchChangeHandlerProps,
  ArtworkSelectHandlerProps,
  WidthChangeHandlerProps,
};
