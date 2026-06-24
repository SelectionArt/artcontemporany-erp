// Types
import type {
  FacetedFilterHandlersProps,
  FacetedFilterHandlersReturn,
  HandleClearProps,
  HandleSelectProps,
} from "./types/faceted-filter.handlers.types";

const handleClear = <TData, TValue>({
  column,
}: HandleClearProps<TData, TValue>) => {
  column.setFilterValue(undefined);
};

const handleSelect = <TData, TValue>({
  column,
  value,
}: HandleSelectProps<TData, TValue>) => {
  const currentValues = new Set(
    column.getFilterValue() as string[] | undefined,
  );
  if (currentValues.has(value)) {
    currentValues.delete(value);
  } else {
    currentValues.add(value);
  }
  const filterValues = Array.from(currentValues);
  column.setFilterValue(filterValues.length ? filterValues : undefined);
};

const FacetedFilterHandlers = <TData, TValue>({
  column,
}: FacetedFilterHandlersProps<TData, TValue>): FacetedFilterHandlersReturn => {
  return {
    handleClear: () => handleClear({ column }),
    handleSelect: (value) => handleSelect({ column, value }),
  };
};

export { FacetedFilterHandlers };
