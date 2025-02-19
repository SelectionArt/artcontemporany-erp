// Types
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { Frame } from "../../types/frames.container.types";
import type { FrameSchema } from "../../schemas/types/frame.schema.types";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";

type FramesHandlersProps = {
  form: UseFormReturn<FrameSchema>;
  newImages: File[];
  router: AppRouterInstance;
  selectedRow: Frame | null;
  selectedRows: Frame[];
  setData: Dispatch<SetStateAction<Frame[]>>;
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Frame | null>>;
  setSelectedRows: Dispatch<SetStateAction<Frame[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

type FramesHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Frame) => void;
  handleDeleteMultiple: (rows: Frame[]) => void;
  handleEdit: (row: Frame) => void;
  handleNavigate: (row: Frame) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: FrameSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<FramesHandlersProps, "form" | "setOpenDialog">;

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
  | "form"
  | "setExistingImages"
  | "setNewImages"
  | "setSelectedRow"
  | "setOpenDialog"
  | "setToDelete"
> & {
  row: Frame;
};

type NavigateHandlerProps = Pick<FramesHandlersProps, "router"> & {
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
  | "form"
  | "setExistingImages"
  | "setNewImages"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "newImages" | "setData" | "setLoading" | "setOpenDialog" | "values"
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
  | "newImages"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "toDelete"
  | "values"
>;

type SubmitHandlerProps = Pick<
  FramesHandlersProps,
  | "form"
  | "newImages"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "toDelete"
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
  NavigateHandlerProps,
  OpenChangeAlertDialogHandlerProps,
  OpenChangeDialogHandlerProps,
  SubmitHandlerCreateProps,
  SubmitHandlerDeleteMultipleProps,
  SubmitHandlerDeleteProps,
  SubmitHandlerEditProps,
  SubmitHandlerProps,
};
