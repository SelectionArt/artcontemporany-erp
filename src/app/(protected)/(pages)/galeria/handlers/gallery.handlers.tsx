// Types
import type {
  GalleryHandlersProps,
  GalleryHandlersReturn,
  FilterChangeHandlerProps,
} from "./types/gallery.handlers.types";

const filterChangeHandler = ({
  key,
  newValues,
  setFilters,
}: FilterChangeHandlerProps): void => {
  setFilters((prevFilters) => ({ ...prevFilters, [key]: newValues }));
};

const GalleryHandlers = ({
  setFilters,
}: GalleryHandlersProps): GalleryHandlersReturn => {
  return {
    handleFilterChange: ({ key, newValues }) =>
      filterChangeHandler({ key, newValues, setFilters }),
  };
};

export { GalleryHandlers };
