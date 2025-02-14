import type { ColumnDef, VisibilityState } from "@tanstack/react-table";
import type { MultipleSelectActionsProps } from "../components/footer/components/multiple-select-actions/types/multiple-select-actions.component.types";

type DataTableProps<TData> = {
  columns: ColumnDef<TData>[];
  data: TData[];
  initialColumnVisibility: VisibilityState;
  multipleSelectActionsProps: Pick<
    MultipleSelectActionsProps<TData>,
    "button" | "actions"
  >;
  onCreateRecord: () => void;
};

export type { DataTableProps };
