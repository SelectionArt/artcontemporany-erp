// Types
import type { Table } from "@tanstack/react-table";

type HandleCheckedChangeProps<TData> = {
  checked: boolean;
  table: Table<TData>;
};

type SelectAllCheckboxHandlersProps<TData> = {
  table: Table<TData>;
};

type SelectAllCheckboxHandlersReturn = {
  handleCheckedChange: (checked: boolean) => void;
};

export type {
  HandleCheckedChangeProps,
  SelectAllCheckboxHandlersProps,
  SelectAllCheckboxHandlersReturn,
};
