// Types
import type { ColumnDef } from "@tanstack/react-table";
import type { Action } from "@/components/data-table/components/header/types/header.component.types";
import type { MultipleSelectActionsProps } from "@/components/data-table/components/footer/components/multiple-select-actions/types/multiple-select-actions.component.types";

type GetColumnsConfigProps<TData> = {
  handleDelete: (row: TData) => void;
  handleEdit: (row: TData) => void;
};

type GetColumnsConfigReturn<TData> = ColumnDef<TData>[];

type GetHeaderActionsProps = {
  handleUploadPricingsExcel: () => void;
};

type GetHeaderActionsReturn<TData> = Action[];

type GetMultipleSelectActionsProps<TData> = {
  handleApplyIncrement: (rows: TData[]) => void;
  handleDeleteMultiple: (rows: TData[]) => void;
};

type GetMultipleSelectActionsReturn<TData> = Omit<
  MultipleSelectActionsProps<TData>,
  "table"
>;

export type {
  GetColumnsConfigProps,
  GetColumnsConfigReturn,
  GetHeaderActionsProps,
  GetHeaderActionsReturn,
  GetMultipleSelectActionsProps,
  GetMultipleSelectActionsReturn,
};
