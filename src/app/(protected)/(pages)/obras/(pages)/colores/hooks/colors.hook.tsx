"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/colors.constants";
// Handlers
import { ColorsHandlers } from "../handlers/colors.handlers";
// Schemas
import { colorSchema } from "../schemas/color.schema";
// Types
import type { Color } from "../types/colors.container.types";
import type { ColorSchema } from "../schemas/types/color.schema.types";
import type {
  ColorsHookProps,
  ColorsHookReturn,
} from "./types/colors.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/colors.hook.utils";

const ColorsHook = ({ initialData }: ColorsHookProps): ColorsHookReturn => {
  const [data, setData] = useState<Color[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Color | null>(null);
  const [selectedRows, setSelectedRows] = useState<Color[]>([]);

  const form = useForm<ColorSchema>({
    resolver: zodResolver(colorSchema),
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
  } = ColorsHandlers({
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

  const columns = getColumnsConfig({ handleDelete, handleEdit });
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

export { ColorsHook };
