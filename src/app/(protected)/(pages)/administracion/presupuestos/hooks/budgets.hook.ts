"use client";
// Vendors
import { useForm, useFieldArray } from "react-hook-form";
import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/budgets.constants";
// Handlers
import { BudgetsHandlers } from "../handlers/budgets.handlers";
// Schemas
import { budgetSchema } from "../schemas/budget.schema";
// Types
import type { Budget } from "../types/budgets.container.types";
import type { BudgetSchema } from "../schemas/types/budget.schema.types";
import type {
  BudgetsHookProps,
  BudgetsHookReturn,
} from "./types/budgets.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/budgets.hook.utils";

const BudgetsHook = ({ budgets }: BudgetsHookProps): BudgetsHookReturn => {
  const [data, setData] = useState<Budget[]>(budgets);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openSignatureDialog, setOpenSignatureDialog] =
    useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Budget | null>(null);
  const [selectedRows, setSelectedRows] = useState<Budget[]>([]);

  const form = useForm<BudgetSchema>({
    resolver: zodResolver(budgetSchema),
    defaultValues: constants.DEFAULT_FORM_VALUES,
  });

  const fieldArray = useFieldArray({
    control: form.control,
    name: "items",
  });

  const signatureRef = useRef(null);

  const {
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleDownloadPDF,
    handleEdit,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleOpenChangeSignatureDialog,
    handleSign,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
  } = BudgetsHandlers({
    form,
    selectedRow,
    selectedRows,
    setData,
    setLoading,
    setOpenAlert,
    setOpenDialog,
    setOpenSignatureDialog,
    setSelectedRow,
    setSelectedRows,
  });

  const columns = getColumnsConfig({
    handleDelete,
    handleDownloadPDF,
    handleEdit,
    handleSign,
  });
  const multipleSelectActionsProps = getMultipleSelectActionsProps({
    handleDeleteMultiple,
  });

  return {
    columns,
    data,
    fieldArray,
    form,
    handleCreate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleOpenChangeSignatureDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    loading,
    multipleSelectActionsProps,
    openAlert,
    openDialog,
    openSignatureDialog,
    selectedRow,
    selectedRows,
    signatureRef,
  };
};

export { BudgetsHook };
