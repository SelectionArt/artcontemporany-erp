// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Format } from "../../types/formats.container.types";
import type { FormatSchema } from "../../schemas/types/format.schema.types";

type FormatsHandlersProps = {
  form: UseFormReturn<FormatSchema>;
  selectedRow: Format | null;
  selectedRows: Format[];
  setData: Dispatch<SetStateAction<Format[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Format | null>>;
  setSelectedRows: Dispatch<SetStateAction<Format[]>>;
};

type FormatsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Format) => void;
  handleDeleteMultiple: (rows: Format[]) => void;
  handleEdit: (row: Format) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: FormatSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<FormatsHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  FormatsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Format };

type DeleteMultipleHandlerProps = Pick<
  FormatsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Format[];
};

type EditHandlerProps = Pick<
  FormatsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Format;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  FormatsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  FormatsHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  FormatsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  FormatsHandlersProps,
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
  FormatsHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: FormatSchema;
};

export type {
  FormatsHandlersProps,
  FormatsHandlersReturn,
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
