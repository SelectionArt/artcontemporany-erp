// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Support } from "../../types/supports.container.types";
import type { SupportSchema } from "../../schemas/types/support.schema.types";

type SupportsHandlersProps = {
  form: UseFormReturn<SupportSchema>;
  selectedRow: Support | null;
  selectedRows: Support[];
  setData: Dispatch<SetStateAction<Support[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Support | null>>;
  setSelectedRows: Dispatch<SetStateAction<Support[]>>;
};

type SupportsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Support) => void;
  handleDeleteMultiple: (rows: Support[]) => void;
  handleEdit: (row: Support) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: SupportSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<SupportsHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  SupportsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Support };

type DeleteMultipleHandlerProps = Pick<
  SupportsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Support[];
};

type EditHandlerProps = Pick<
  SupportsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Support;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  SupportsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  SupportsHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  SupportsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  SupportsHandlersProps,
  "selectedRows" | "setData" | "setLoading" | "setSelectedRows"
>;

type SubmitHandlerEditProps = Pick<
  SubmitHandlerProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "values"
>;

type SubmitHandlerProps = Pick<
  SupportsHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: SupportSchema;
};

export type {
  SupportsHandlersProps,
  SupportsHandlersReturn,
  CreateHandlerProps,
  DeleteHandlerProps,
  DeleteMultipleHandlerProps,
  EditHandlerProps,
  OpenChangeAlertDialogHandlerProps,
  OpenChangeDialogHandlerProps,
  SubmitHandlerCreateProps,
  SubmitHandlerDeleteMultipleProps,
  SubmitHandlerDeleteProps,
  SubmitHandlerEditProps,
  SubmitHandlerProps,
};
