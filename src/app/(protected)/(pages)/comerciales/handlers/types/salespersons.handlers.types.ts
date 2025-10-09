// Types
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Salesperson } from "../../types/salespersons.container.types";
import type { SalespersonSchema } from "../../schemas/types/salesperson.schema.types";

type SalespersonsHandlersProps = {
  form: UseFormReturn<SalespersonSchema>;
  router: AppRouterInstance;
  selectedRow: Salesperson | null;
  selectedRows: Salesperson[];
  setData: Dispatch<SetStateAction<Salesperson[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Salesperson | null>>;
  setSelectedRows: Dispatch<SetStateAction<Salesperson[]>>;
};

type SalespersonsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Salesperson) => void;
  handleDeleteMultiple: (rows: Salesperson[]) => void;
  handleEdit: (row: Salesperson) => void;
  handleNavigate: (row: Salesperson) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: SalespersonSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<SalespersonsHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  SalespersonsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Salesperson };

type DeleteMultipleHandlerProps = Pick<
  SalespersonsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Salesperson[];
};

type EditHandlerProps = Pick<
  SalespersonsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Salesperson;
};

type NavigateHandlerProps = Pick<SalespersonsHandlersProps, "router"> & {
  row: Salesperson;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  SalespersonsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  SalespersonsHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  SalespersonsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  SalespersonsHandlersProps,
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
  SalespersonsHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: SalespersonSchema;
};

export type {
  SalespersonsHandlersProps,
  SalespersonsHandlersReturn,
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
