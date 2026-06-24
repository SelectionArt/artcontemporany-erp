// Types
import type { LucideIcon } from "lucide-react";
import type { Table } from "@tanstack/react-table";

type FacetedFilterOption = {
  icon?: LucideIcon;
  label: string;
  value: string;
};

type DataTableFilter = {
  columnId: string;
  options: FacetedFilterOption[];
  title?: string;
};

type DataTableHeaderAction = {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
};

type CreateRecord = {
  onClick: () => void;
  tooltip?: string;
  visible?: boolean;
};

type DataTableMultipleSelectAction<TData> = {
  icon?: LucideIcon;
  label: string;
  onClick: (selectedRows: TData[]) => void;
  visible?: boolean;
};

type DataTableMultipleSelectActions<TData> = {
  actions: DataTableMultipleSelectAction<TData>[];
  button: {
    ariaLabel: string;
    icon?: LucideIcon;
    label?: string;
  };
};

type DataTableProps<TData> = {
  createRecord?: CreateRecord;
  filters?: DataTableFilter[];
  headerActions?: DataTableHeaderAction[];
  isError?: boolean;
  isLoading?: boolean;
  multipleSelectActions?: DataTableMultipleSelectActions<TData>;
  table: Table<TData>;
};

export type {
  CreateRecord,
  DataTableFilter,
  DataTableHeaderAction,
  DataTableMultipleSelectAction,
  DataTableMultipleSelectActions,
  DataTableProps,
  FacetedFilterOption,
};
