// Vendors
import { useTranslations } from "next-intl";
// Types
import type { UseFiltersProps } from "./types/use-filters.hook.types";

const useFilters = <TData>({ table }: UseFiltersProps<TData>) => {
  const t = useTranslations(
    "root.components.dataTable.components.header.components.filters",
  );

  const hasActiveFilters = table.getState().columnFilters.length > 0;

  return { hasActiveFilters, t };
};

export { useFilters };
