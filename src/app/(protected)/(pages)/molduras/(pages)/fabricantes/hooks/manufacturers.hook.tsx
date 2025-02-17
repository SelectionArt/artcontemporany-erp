"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/manufacturers.constants";
// Handlers
import { ManufacturersHandlers } from "../handlers/manufacturers.handlers";
// Schemas
import { manufacturerSchema } from "../schemas/manufacturer.schema";
// Types
import type { Manufacturer } from "../types/manufacturers.container.types";
import type { ManufacturerSchema } from "../schemas/types/manufacturer.schema.types";
import type {
  ManufacturersHookProps,
  ManufacturersHookReturn,
} from "./types/manufacturers.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/manufacturers.hook.utils";

const ManufacturersHook = ({
  initialData,
}: ManufacturersHookProps): ManufacturersHookReturn => {
  const [data, setData] = useState<Manufacturer[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Manufacturer | null>(null);
  const [selectedRows, setSelectedRows] = useState<Manufacturer[]>([]);

  const form = useForm<ManufacturerSchema>({
    resolver: zodResolver(manufacturerSchema),
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
  } = ManufacturersHandlers({
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

export { ManufacturersHook };
