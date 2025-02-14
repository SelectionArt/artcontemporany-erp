// Vendors
import type { LucideIcon } from "lucide-react";
import type { Table } from "@tanstack/react-table";

type Action<TData> = {
  icon?: LucideIcon;
  label: string;
  onClick: (selectedRows: TData[]) => void;
};

type MultipleSelectActionsProps<TData> = {
  actions: Action<TData>[];
  button: {
    ariaLabel?: string;
    icon?: LucideIcon;
    label?: string;
  };
  table: Table<TData>;
};

export type { MultipleSelectActionsProps };
