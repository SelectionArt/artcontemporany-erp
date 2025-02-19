// Types
import type { ColumnDef } from "@tanstack/react-table";
import type { MultipleSelectActionsProps } from "@/components/data-table/components/footer/components/multiple-select-actions/types/multiple-select-actions.component.types";

type GetColumnsConfigProps<TData> = {
  handleDelete: (row: TData) => void;
  handleEdit: (row: TData) => void;
  handleNavigate: (row: TData) => void;
};

type GetColumnsConfigReturn<TData> = ColumnDef<TData>[];

type GetMultipleSelectActionsProps<TData> = {
  handleDeleteMultiple: (rows: TData[]) => void;
};

type GetMultipleSelectActionsReturn<TData> = Omit<
  MultipleSelectActionsProps<TData>,
  "table"
>;

export type {
  GetColumnsConfigProps,
  GetColumnsConfigReturn,
  GetMultipleSelectActionsProps,
  GetMultipleSelectActionsReturn,
};
