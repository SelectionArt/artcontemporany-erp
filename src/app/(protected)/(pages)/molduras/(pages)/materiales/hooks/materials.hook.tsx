"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/materials.constants";
// Handlers
import { MaterialsHandlers } from "../handlers/materials.handlers";
// Schemas
import { materialSchema } from "../schemas/material.schema";
// Types
import type { Material } from "../types/materials.container.types";
import type { MaterialSchema } from "../schemas/types/material.schema.types";
import type {
  MaterialsHookProps,
  MaterialsHookReturn,
} from "./types/materials.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/materials.hook.utils";

const MaterialsHook = ({
  initialData,
}: MaterialsHookProps): MaterialsHookReturn => {
  const [data, setData] = useState<Material[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Material | null>(null);
  const [selectedRows, setSelectedRows] = useState<Material[]>([]);

  const form = useForm<MaterialSchema>({
    resolver: zodResolver(materialSchema),
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
  } = MaterialsHandlers({
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

export { MaterialsHook };
