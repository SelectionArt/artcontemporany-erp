import type { ColumnDef, VisibilityState } from "@tanstack/react-table";
import type { LucideIcon } from "lucide-react";
import type { MultipleSelectActionsProps } from "../components/footer/components/multiple-select-actions/types/multiple-select-actions.component.types";
import type { Action as HeaderAction } from "../components/header/types/header.component.types";

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

type DataTableProps<TData> = {
  columns: ColumnDef<TData>[];
  data: TData[];
  filters?: DataTableFilter[];
  headerActions?: HeaderAction[];
  initialColumnVisibility: VisibilityState;
  multipleSelectActionsProps: Pick<
    MultipleSelectActionsProps<TData>,
    "button" | "actions"
  >;
  onCreateRecord?: () => void;
};

export type { DataTableFilter, DataTableProps, FacetedFilterOption };
