// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Material } from "../../types/materials.container.types";
import type { MaterialSchema } from "../../schemas/types/material.schema.types";

type MaterialsHandlersProps = {
  form: UseFormReturn<MaterialSchema>;
  selectedRow: Material | null;
  selectedRows: Material[];
  setData: Dispatch<SetStateAction<Material[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Material | null>>;
  setSelectedRows: Dispatch<SetStateAction<Material[]>>;
};

type MaterialsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Material) => void;
  handleDeleteMultiple: (rows: Material[]) => void;
  handleEdit: (row: Material) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: MaterialSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<MaterialsHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  MaterialsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Material };

type DeleteMultipleHandlerProps = Pick<
  MaterialsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Material[];
};

type EditHandlerProps = Pick<
  MaterialsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Material;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  MaterialsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  MaterialsHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  MaterialsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  MaterialsHandlersProps,
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
  MaterialsHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: MaterialSchema;
};

export type {
  MaterialsHandlersProps,
  MaterialsHandlersReturn,
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
