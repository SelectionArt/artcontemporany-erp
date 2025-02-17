// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Manufacturer } from "../../types/manufacturers.container.types";
import type { ManufacturerSchema } from "../../schemas/types/manufacturer.schema.types";

type ManufacturersHandlersProps = {
  form: UseFormReturn<ManufacturerSchema>;
  selectedRow: Manufacturer | null;
  selectedRows: Manufacturer[];
  setData: Dispatch<SetStateAction<Manufacturer[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Manufacturer | null>>;
  setSelectedRows: Dispatch<SetStateAction<Manufacturer[]>>;
};

type ManufacturersHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Manufacturer) => void;
  handleDeleteMultiple: (rows: Manufacturer[]) => void;
  handleEdit: (row: Manufacturer) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: ManufacturerSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<ManufacturersHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  ManufacturersHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Manufacturer };

type DeleteMultipleHandlerProps = Pick<
  ManufacturersHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Manufacturer[];
};

type EditHandlerProps = Pick<
  ManufacturersHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Manufacturer;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  ManufacturersHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  ManufacturersHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  ManufacturersHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  ManufacturersHandlersProps,
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
  ManufacturersHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: ManufacturerSchema;
};

export type {
  ManufacturersHandlersProps,
  ManufacturersHandlersReturn,
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
