"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/finishes.constants";
// Handlers
import { FinishesHandlers } from "../handlers/finishes.handlers";
// Schemas
import { finishSchema } from "../schemas/finish.schema";
// Types
import type { Finish } from "../types/finishes.container.types";
import type { FinishSchema } from "../schemas/types/finish.schema.types";
import type {
  FinishesHookProps,
  FinishesHookReturn,
} from "./types/finishes.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/finishes.hook.utils";

const FinishesHook = ({
  initialData,
}: FinishesHookProps): FinishesHookReturn => {
  const [data, setData] = useState<Finish[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Finish | null>(null);
  const [selectedRows, setSelectedRows] = useState<Finish[]>([]);

  const form = useForm<FinishSchema>({
    resolver: zodResolver(finishSchema),
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
  } = FinishesHandlers({
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

export { FinishesHook };
