// Types
import type {
  GalleryHandlersProps,
  GalleryHandlersReturn,
  FilterChangeHandlerProps,
  HeightChangeHandlerProps,
  SearchChangeHandlerProps,
  WidthChangeHandlerProps,
} from "./types/gallery.handlers.types";

const filterChangeHandler = ({
  key,
  newValues,
  setFilters,
}: FilterChangeHandlerProps): void => {
  setFilters((prevFilters) => ({ ...prevFilters, [key]: newValues }));
};

const heightChangeHandler = ({
  event,
  setHeight,
}: HeightChangeHandlerProps): void => {
  setHeight(event.target.value);
};

const searchChangeHandler = ({
  event,
  setSearchTerm,
}: SearchChangeHandlerProps): void => {
  setSearchTerm(event.target.value);
};

const widthChangeHandler = ({
  event,
  setWidth,
}: WidthChangeHandlerProps): void => {
  setWidth(event.target.value);
};

const GalleryHandlers = ({
  setFilters,
  setHeight,
  setSearchTerm,
  setWidth,
}: GalleryHandlersProps): GalleryHandlersReturn => {
  return {
    handleFilterChange: ({ key, newValues }) =>
      filterChangeHandler({ key, newValues, setFilters }),
    handleHeightChange: (event) => heightChangeHandler({ event, setHeight }),
    handleSearchChange: (event) =>
      searchChangeHandler({ event, setSearchTerm }),
    handleWidthChange: (event) => widthChangeHandler({ event, setWidth }),
  };
};

export { GalleryHandlers };
