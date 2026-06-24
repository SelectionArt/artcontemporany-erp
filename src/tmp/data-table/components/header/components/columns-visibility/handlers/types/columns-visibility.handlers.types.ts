// Types
import type { Column } from "@tanstack/react-table";

type HandleCheckedChangeProps<TData> = {
  column: Column<TData>;
  value: boolean;
};

type ColumnsVisibilityHandlersReturn<TData> = {
  handleCheckedChange: ({
    column,
    value,
  }: HandleCheckedChangeProps<TData>) => void;
};

export type { ColumnsVisibilityHandlersReturn, HandleCheckedChangeProps };
