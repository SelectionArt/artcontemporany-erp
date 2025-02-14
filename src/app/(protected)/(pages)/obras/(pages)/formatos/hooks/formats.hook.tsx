"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/formats.constants";
// Handlers
import { FormatsHandlers } from "../handlers/formats.handlers";
// Schemas
import { formatSchema } from "../schemas/format.schema";
// Types
import type { Format } from "../types/formats.container.types";
import type { FormatSchema } from "../schemas/types/format.schema.types";
import type {
  FormatsHookProps,
  FormatsHookReturn,
} from "./types/formats.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/formats.hook.utils";

const FormatsHook = ({ initialData }: FormatsHookProps): FormatsHookReturn => {
  const [data, setData] = useState<Format[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Format | null>(null);
  const [selectedRows, setSelectedRows] = useState<Format[]>([]);

  const form = useForm<FormatSchema>({
    resolver: zodResolver(formatSchema),
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
  } = FormatsHandlers({
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

  const columns = getColumnsConfig<Format>({ handleDelete, handleEdit });
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

export { FormatsHook };
