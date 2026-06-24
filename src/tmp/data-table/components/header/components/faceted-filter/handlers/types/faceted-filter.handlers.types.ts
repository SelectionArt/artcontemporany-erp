// Types
import type { Column } from "@tanstack/react-table";

type FacetedFilterHandlersProps<TData, TValue> = {
  column: Column<TData, TValue>;
};

type HandleClearProps<TData, TValue> = FacetedFilterHandlersProps<
  TData,
  TValue
>;

type HandleSelectProps<TData, TValue> = FacetedFilterHandlersProps<
  TData,
  TValue
> & {
  value: string;
};

type FacetedFilterHandlersReturn = {
  handleClear: () => void;
  handleSelect: (value: string) => void;
};

export type {
  FacetedFilterHandlersProps,
  FacetedFilterHandlersReturn,
  HandleClearProps,
  HandleSelectProps,
};
