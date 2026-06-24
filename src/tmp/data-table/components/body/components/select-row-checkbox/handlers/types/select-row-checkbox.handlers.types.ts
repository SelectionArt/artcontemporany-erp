// Types
import type { Row } from "@tanstack/react-table";

type HandleCheckedChangeProps<TData> = {
  row: Row<TData>;
  value: boolean;
};

type SelectRowCheckboxHandlersProps<TData> = {
  row: Row<TData>;
};

type SelectRowCheckboxHandlersReturn = {
  handleCheckedChange: (value: boolean) => void;
};

export type {
  HandleCheckedChangeProps,
  SelectRowCheckboxHandlersProps,
  SelectRowCheckboxHandlersReturn,
};
