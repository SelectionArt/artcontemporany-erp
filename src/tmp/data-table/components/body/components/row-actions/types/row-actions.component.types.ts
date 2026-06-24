// Types
import type { Row } from "@tanstack/react-table";
import type { LucideIcon } from "lucide-react";

type Action<TData> = {
  icon?: LucideIcon;
  label: string;
  onClick: (row: TData) => void;
  visible?: boolean;
};

type RowActionsProps<TData> = {
  actions: Action<TData>[];
  button: {
    ariaLabel: string;
    icon?: LucideIcon;
  };
  row: Row<TData>;
  visible?: boolean;
};

export type { RowActionsProps };
