// Vendors
import type { LucideIcon } from "lucide-react";
import type { Row } from "@tanstack/react-table";

type Action<TData> = {
  icon?: LucideIcon;
  label: string;
  onClick: (row: TData) => void;
};

type RowActionsProps<TData> = {
  actions: Action<TData>[];
  button: {
    ariaLabel?: string;
    icon?: LucideIcon;
    label?: string;
  };
  row: Row<TData>;
};

export type { RowActionsProps };
