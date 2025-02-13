// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Finish } from "../../types/finishes.container.types";
import type { FinishSchema } from "../../schemas/types/finish.schema.types";

type FinishesHandlersProps = {
  form: UseFormReturn<FinishSchema>;
  selectedRow: Finish | null;
  selectedRows: Finish[];
  setData: Dispatch<SetStateAction<Finish[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Finish | null>>;
  setSelectedRows: Dispatch<SetStateAction<Finish[]>>;
};

type FinishesHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Finish) => void;
  handleDeleteMultiple: (rows: Finish[]) => void;
  handleEdit: (row: Finish) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: FinishSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<FinishesHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  FinishesHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Finish };

type DeleteMultipleHandlerProps = Pick<
  FinishesHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Finish[];
};

type EditHandlerProps = Pick<
  FinishesHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Finish;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  FinishesHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  FinishesHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  FinishesHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  FinishesHandlersProps,
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
  FinishesHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: FinishSchema;
};

export type {
  FinishesHandlersProps,
  FinishesHandlersReturn,
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
