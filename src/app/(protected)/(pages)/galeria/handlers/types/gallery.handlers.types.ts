// Types
import type { Dispatch, SetStateAction } from "react";

type GalleryHandlersProps = {
  setFilters: Dispatch<SetStateAction<Record<string, Set<string>>>>;
};

type GalleryHandlersReturn = {
  handleFilterChange({
    key,
    newValues,
  }: {
    key: string;
    newValues: Set<string>;
  }): void;
};

type FilterChangeHandlerProps = Pick<GalleryHandlersProps, "setFilters"> & {
  key: string;
  newValues: Set<string>;
};

export type {
  GalleryHandlersProps,
  GalleryHandlersReturn,
  FilterChangeHandlerProps,
};
