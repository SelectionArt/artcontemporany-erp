"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/styles.constants";
// Handlers
import { StylesHandlers } from "../handlers/styles.handlers";
// Schemas
import { styleSchema } from "../schemas/style.schema";
// Types
import type { Style } from "../types/styles.container.types";
import type { StyleSchema } from "../schemas/types/style.schema.types";
import type {
  StylesHookProps,
  StylesHookReturn,
} from "./types/styles.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/styles.hook.utils";

const StylesHook = ({ initialData }: StylesHookProps): StylesHookReturn => {
  const [data, setData] = useState<Style[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Style | null>(null);
  const [selectedRows, setSelectedRows] = useState<Style[]>([]);

  const form = useForm<StyleSchema>({
    resolver: zodResolver(styleSchema),
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
  } = StylesHandlers({
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

  const columns = getColumnsConfig<Style>({ handleDelete, handleEdit });
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

export { StylesHook };
