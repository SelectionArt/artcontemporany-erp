// Types
import type { FacetedFilterOption } from "@/components/data-table/types/data-table.component.types";
import type { Column } from "@tanstack/react-table";

type FacetedFilterProps<TData, TValue> = {
  column: Column<TData, TValue>;
  options: FacetedFilterOption[];
  title?: string;
};

export type { FacetedFilterOption, FacetedFilterProps };
