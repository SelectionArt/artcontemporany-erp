// Types
import type { FacetedFilterHandlersReturn } from "@/components/data-table/components/header/components/faceted-filter/handlers/types/faceted-filter.handlers.types";
import type { Column } from "@tanstack/react-table";
import type { _Translator } from "use-intl";

type UseFacetedFilterProps<TData, TValue> = {
  column: Column<TData, TValue>;
};

type UseFacetedFilterReturn = FacetedFilterHandlersReturn & {
  facets: Map<unknown, number>;
  selectedValues: Set<string>;
  t: _Translator;
};

export type { UseFacetedFilterProps, UseFacetedFilterReturn };
