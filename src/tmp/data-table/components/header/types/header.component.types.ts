// Types
import type {
  CreateRecord,
  DataTableFilter,
  DataTableHeaderAction,
} from "@/components/data-table/types/data-table.component.types";
import type { Table } from "@tanstack/react-table";

type HeaderProps<TData> = {
  actions?: DataTableHeaderAction[];
  createRecord?: CreateRecord;
  filters?: DataTableFilter[];
  onGlobalFilterChange: (value: string) => void;
  table: Table<TData>;
};

export type { HeaderProps };
