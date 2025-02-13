// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Color } from "../../types/colors.container.types";
import type { ColorSchema } from "../../schemas/types/color.schema.types";

type ColorsHandlersProps = {
  form: UseFormReturn<ColorSchema>;
  selectedRow: Color | null;
  selectedRows: Color[];
  setData: Dispatch<SetStateAction<Color[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Color | null>>;
  setSelectedRows: Dispatch<SetStateAction<Color[]>>;
};

type ColorsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Color) => void;
  handleDeleteMultiple: (rows: Color[]) => void;
  handleEdit: (row: Color) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: ColorSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<ColorsHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  ColorsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Color };

type DeleteMultipleHandlerProps = Pick<
  ColorsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Color[];
};

type EditHandlerProps = Pick<
  ColorsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Color;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  ColorsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  ColorsHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  ColorsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  ColorsHandlersProps,
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
  ColorsHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: ColorSchema;
};

export type {
  ColorsHandlersProps,
  ColorsHandlersReturn,
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
