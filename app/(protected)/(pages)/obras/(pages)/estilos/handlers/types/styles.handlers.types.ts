// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Style } from "../../types/styles.container.types";
import type { StyleSchema } from "../../schemas/types/style.schema.types";

type StylesHandlersProps = {
  form: UseFormReturn<StyleSchema>;
  selectedRow: Style | null;
  selectedRows: Style[];
  setData: Dispatch<SetStateAction<Style[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Style | null>>;
  setSelectedRows: Dispatch<SetStateAction<Style[]>>;
};

type StylesHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Style) => void;
  handleDeleteMultiple: (rows: Style[]) => void;
  handleEdit: (row: Style) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: StyleSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<StylesHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  StylesHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Style };

type DeleteMultipleHandlerProps = Pick<
  StylesHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Style[];
};

type EditHandlerProps = Pick<
  StylesHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Style;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  StylesHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  StylesHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  StylesHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  StylesHandlersProps,
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
  StylesHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: StyleSchema;
};

export type {
  StylesHandlersProps,
  StylesHandlersReturn,
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
