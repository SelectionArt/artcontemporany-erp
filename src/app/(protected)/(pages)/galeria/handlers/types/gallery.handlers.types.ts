// Types
import type { Dispatch, SetStateAction } from "react";

type GalleryHandlersProps = {
  setFilters: Dispatch<SetStateAction<Record<string, Set<string>>>>;
  setHeight: Dispatch<SetStateAction<string>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setWidth: Dispatch<SetStateAction<string>>;
};

type GalleryHandlersReturn = {
  handleFilterChange({
    key,
    newValues,
  }: {
    key: string;
    newValues: Set<string>;
  }): void;
  handleHeightChange(event: React.ChangeEvent<HTMLInputElement>): void;
  handleSearchChange(event: React.ChangeEvent<HTMLInputElement>): void;
  handleWidthChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

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

type WidthChangeHandlerProps = Pick<GalleryHandlersProps, "setWidth"> & {
  event: React.ChangeEvent<HTMLInputElement>;
};

export type {
  GalleryHandlersProps,
  GalleryHandlersReturn,
  FilterChangeHandlerProps,
  HeightChangeHandlerProps,
  SearchChangeHandlerProps,
  WidthChangeHandlerProps,
};
