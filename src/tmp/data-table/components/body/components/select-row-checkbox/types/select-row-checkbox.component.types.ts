// Types
import type { Row } from "@tanstack/react-table";

type SelectRowCheckboxProps<TData> = {
  disabled?: boolean;
  row: Row<TData>;
};

export type { SelectRowCheckboxProps };
