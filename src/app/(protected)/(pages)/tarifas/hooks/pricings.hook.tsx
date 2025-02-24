"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/pricings.constants";
// Handlers
import { PricingsHandlers } from "../handlers/pricings.handlers";
// Schemas
import { pricingSchema } from "../schemas/pricing.schema";
// Types
import type { Pricing } from "../types/pricings.container.types";
import type { PricingSchema } from "../schemas/types/pricing.schema.types";
import type {
  PricingsHookProps,
  PricingsHookReturn,
} from "./types/pricings.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/pricings.hook.utils";

const PricingsHook = ({
  initialData,
}: PricingsHookProps): PricingsHookReturn => {
  const [data, setData] = useState<Pricing[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Pricing | null>(null);
  const [selectedRows, setSelectedRows] = useState<Pricing[]>([]);

  const router = useRouter();

  const form = useForm<PricingSchema>({
    resolver: zodResolver(pricingSchema),
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
  } = PricingsHandlers({
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

export { PricingsHook };
