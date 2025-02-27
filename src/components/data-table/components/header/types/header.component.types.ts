import type { Dispatch, SetStateAction } from "react";
import type { LucideIcon } from "lucide-react";
import type { Table } from "@tanstack/react-table";

type Action = {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
};

type HeaderProps<TData> = {
  actions?: Action[];
  globalFilter: string;
  onCreateRecord?: () => void;
  setGlobalFilter: Dispatch<SetStateAction<string>>;
  table: Table<TData>;
};

export type { Action, HeaderProps };
