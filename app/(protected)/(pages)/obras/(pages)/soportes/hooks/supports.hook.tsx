"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/supports.constants";
// Handlers
import { SupportsHandlers } from "../handlers/supports.handlers";
// Schemas
import { supportSchema } from "../schemas/support.schema";
// Types
import type { Support } from "../types/supports.container.types";
import type { SupportSchema } from "../schemas/types/support.schema.types";
import type {
  SupportsHookProps,
  SupportsHookReturn,
} from "./types/supports.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/supports.hook.utils";

const SupportsHook = ({
  initialData,
}: SupportsHookProps): SupportsHookReturn => {
  const [data, setData] = useState<Support[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Support | null>(null);
  const [selectedRows, setSelectedRows] = useState<Support[]>([]);

  const form = useForm<SupportSchema>({
    resolver: zodResolver(supportSchema),
    defaultValues: constants.DEFAULT_FORM_VALUES,
  });

  const {
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleEdit,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
  } = SupportsHandlers({
    form,
    selectedRow,
    selectedRows,
    setData,
    setLoading,
    setOpenAlert,
    setOpenDialog,
    setSelectedRow,
    setSelectedRows,
  });

  const columns = getColumnsConfig<Support>({ handleDelete, handleEdit });
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

export { SupportsHook };
