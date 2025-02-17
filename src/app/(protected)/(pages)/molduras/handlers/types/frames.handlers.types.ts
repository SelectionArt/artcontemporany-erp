// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Frame } from "../../types/frames.container.types";
import type { FrameSchema } from "../../schemas/types/frame.schema.types";

type FramesHandlersProps = {
  form: UseFormReturn<FrameSchema>;
  selectedRow: Frame | null;
  selectedRows: Frame[];
  setData: Dispatch<SetStateAction<Frame[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Frame | null>>;
  setSelectedRows: Dispatch<SetStateAction<Frame[]>>;
};

type FramesHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Frame) => void;
  handleDeleteMultiple: (rows: Frame[]) => void;
  handleEdit: (row: Frame) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: FrameSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<FramesHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  FramesHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Frame };

type DeleteMultipleHandlerProps = Pick<
  FramesHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Frame[];
};

type EditHandlerProps = Pick<
  FramesHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Frame;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  FramesHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  FramesHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  FramesHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  FramesHandlersProps,
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
  FramesHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: FrameSchema;
};

export type {
  FramesHandlersProps,
  FramesHandlersReturn,
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
