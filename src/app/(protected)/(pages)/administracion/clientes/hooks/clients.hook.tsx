"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/clients.constants";
// Handlers
import { ClientsHandlers } from "../handlers/clients.handlers";
// Schemas
import { clientSchema } from "../schemas/client.schema";
// Types
import type { Client } from "../types/clients.container.types";
import type { ClientSchema } from "../schemas/types/client.schema.types";
import type {
  ClientsHookProps,
  ClientsHookReturn,
} from "./types/clients.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/clients.hook.utils";

const ClientsHook = ({ initialData }: ClientsHookProps): ClientsHookReturn => {
  const [data, setData] = useState<Client[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Client | null>(null);
  const [selectedRows, setSelectedRows] = useState<Client[]>([]);

  const form = useForm<ClientSchema>({
    resolver: zodResolver(clientSchema),
    defaultValues: constants.DEFAULT_FORM_VALUES,
  });

   const router = useRouter();

  const {
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleEdit,
    handleNavigate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
  } = ClientsHandlers({
    form,
    router,
    selectedRow,
    selectedRows,
    setData,
    setLoading,
    setOpenAlert,
    setOpenDialog,
    setSelectedRow,
    setSelectedRows,
  });

  const columns = getColumnsConfig({
    handleDelete,
    handleEdit,
    handleNavigate,
  });
  const multipleSelectActionsProps = getMultipleSelectActionsProps({
    handleDeleteMultiple,
  });

  return {
    columns,
    data,
    form,
    handleCreate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    loading,
    multipleSelectActionsProps,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
  };
};

export { ClientsHook };
