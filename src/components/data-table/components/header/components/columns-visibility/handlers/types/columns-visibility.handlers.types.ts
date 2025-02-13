// Vendors
import type { Column } from "@tanstack/react-table";

type CheckedChangeHandlerProps<TData> = {
  column: Column<TData>;
  value: boolean;
};

type ColumnsVisibilityHandlersReturn<TData> = {
  handleCheckedChange: ({
    column,
    value,
  }: CheckedChangeHandlerProps<TData>) => void;
};

export type { CheckedChangeHandlerProps, ColumnsVisibilityHandlersReturn };
