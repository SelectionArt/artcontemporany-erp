// Types
import type { UseFiltersProps } from "./types/use-filters.hook.types";

const useFilters = <TData>({ table }: UseFiltersProps<TData>) => {
  const hasActiveFilters = table.getState().columnFilters.length > 0;

  return { hasActiveFilters };
};

export { useFilters };
