// Handlers
import { FacetedFilterHandlers } from "../../handlers/faceted-filter.handlers";
// Types
import type { UseFacetedFilterProps } from "./types/use-faceted-filter.hook.types";

const useFacetedFilter = <TData, TValue>({
  column,
}: UseFacetedFilterProps<TData, TValue>) => {
  const facets = column.getFacetedUniqueValues();
  const selectedValues = new Set(
    column.getFilterValue() as string[] | undefined,
  );

  const { handleClear, handleSelect } = FacetedFilterHandlers({ column });

  return {
    facets,
    handleClear,
    handleSelect,
    selectedValues,
  };
};

export { useFacetedFilter };
