// Types
import type { FacetedFilterHandlersReturn } from "../../../handlers/types/faceted-filter.handlers.types";
import type { Column } from "@tanstack/react-table";

type UseFacetedFilterProps<TData, TValue> = {
  column: Column<TData, TValue>;
};

type UseFacetedFilterReturn = FacetedFilterHandlersReturn & {
  facets: Map<unknown, number>;
  selectedValues: Set<string>;
};

export type { UseFacetedFilterProps, UseFacetedFilterReturn };
