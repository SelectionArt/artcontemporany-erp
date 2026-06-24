import type { Dispatch, SetStateAction } from "react";
import type { LucideIcon } from "lucide-react";
import type { Table } from "@tanstack/react-table";
import type { DataTableFilter } from "@/components/data-table/types/data-table.component.types";

type Action = {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
};

type HeaderProps<TData> = {
  actions?: Action[];
  filters?: DataTableFilter[];
  globalFilter: string;
  onCreateRecord?: () => void;
  setGlobalFilter: Dispatch<SetStateAction<string>>;
  table: Table<TData>;
};

export type { Action, HeaderProps };
