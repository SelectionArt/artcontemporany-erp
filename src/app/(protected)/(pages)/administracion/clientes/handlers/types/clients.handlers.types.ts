// Types
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Client } from "../../types/clients.container.types";
import type { ClientSchema } from "../../schemas/types/client.schema.types";

type ClientsHandlersProps = {
  form: UseFormReturn<ClientSchema>;
  router: AppRouterInstance;
  selectedRow: Client | null;
  selectedRows: Client[];
  setData: Dispatch<SetStateAction<Client[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Client | null>>;
  setSelectedRows: Dispatch<SetStateAction<Client[]>>;
};

type ClientsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Client) => void;
  handleDeleteMultiple: (rows: Client[]) => void;
  handleEdit: (row: Client) => void;
  handleNavigate: (row: Client) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: ClientSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<ClientsHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  ClientsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Client };

type DeleteMultipleHandlerProps = Pick<
  ClientsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Client[];
};

type EditHandlerProps = Pick<
  ClientsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Client;
};

type NavigateHandlerProps = Pick<ClientsHandlersProps, "router"> & {
  row: Client;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  ClientsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  ClientsHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  ClientsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  ClientsHandlersProps,
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
  ClientsHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: ClientSchema;
};

export type {
  ClientsHandlersProps,
  ClientsHandlersReturn,
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
