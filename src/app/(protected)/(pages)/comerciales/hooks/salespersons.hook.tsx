"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/salespersons.constants";
// Handlers
import { SalespersonsHandlers } from "../handlers/salespersons.handlers";
// Schemas
import { salespersonSchema } from "../schemas/salesperson.schema";
// Types
import type { Salesperson } from "../types/salespersons.container.types";
import type { SalespersonSchema } from "../schemas/types/salesperson.schema.types";
import type {
  SalespersonsHookProps,
  SalespersonsHookReturn,
} from "./types/salespersons.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/salespersons.hook.utils";

const SalespersonsHook = ({
  initialData,
}: SalespersonsHookProps): SalespersonsHookReturn => {
  const [data, setData] = useState<Salesperson[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Salesperson | null>(null);
  const [selectedRows, setSelectedRows] = useState<Salesperson[]>([]);

  const form = useForm<SalespersonSchema>({
    resolver: zodResolver(salespersonSchema),
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
  } = SalespersonsHandlers({
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

export { SalespersonsHook };
