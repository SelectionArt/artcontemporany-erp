// Types
import type { ColumnDef } from "@tanstack/react-table";
import type { MultipleSelectActionsProps } from "@/components/data-table/components/footer/components/multiple-select-actions/types/multiple-select-actions.component.types";

type GetColumnsConfigProps<TData> = {
  handleClone: (row: TData) => void;
  handleDelete: (row: TData) => void;
  handlePreviewPDF: ({
    row,
    type,
  }: {
    row: TData;
    type: "budget" | "invoice" | "deliveryNote" | "orderConfirmation";
  }) => void;
  handleDownloadPDF: ({
    row,
    type,
  }: {
    row: TData;
    type: "budget" | "invoice" | "deliveryNote" | "orderConfirmation";
  }) => void;
  handleEdit: (row: TData) => void;
  handleOpenSign: (row: TData) => void;
  handleSendEmail: ({
    row,
    type,
  }: {
    row: TData;
    type: "budget" | "invoice" | "deliveryNote" | "orderConfirmation";
  }) => void;
  handleStatusChange: (props: { id: string; newStatus: string }) => void;
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
