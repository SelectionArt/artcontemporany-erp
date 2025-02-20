"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/pricings.constants";
// Handlers
import { PricingsHandlers } from "../handlers/pricings.handlers";
// Schemas
import { incrementSchema, pricingSchema } from "../schemas/pricing.schema";
// Types
import type { Pricing } from "../types/pricings.container.types";
import type {
  IncrementSchema,
  PricingSchema,
} from "../schemas/types/pricing.schema.types";
import type {
  PricingsHookProps,
  PricingsHookReturn,
} from "./types/pricings.hook.types";
// Utils
import {
  getColumnsConfig,
  getHeaderActionsProps,
  getMultipleSelectActionsProps,
} from "./utils/pricings.hook.utils";

const PricingsHook = ({
  initialData,
}: PricingsHookProps): PricingsHookReturn => {
  const [data, setData] = useState<Pricing[]>(initialData);
  const [loadingIncrement, setLoadingIncrement] = useState<boolean>(false);
  const [loadingPricing, setLoadingPricing] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openIncrementDialog, setOpenIncrementDialog] =
    useState<boolean>(false);
  const [openPricingDialog, setOpenPricingDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Pricing | null>(null);
  const [selectedRows, setSelectedRows] = useState<Pricing[]>([]);

  const pricingForm = useForm<PricingSchema>({
    resolver: zodResolver(pricingSchema),
    defaultValues: constants.DEFAULT_PRICING_FORM_VALUES,
  });

  const incrementForm = useForm<IncrementSchema>({
    resolver: zodResolver(incrementSchema),
    defaultValues: constants.DEFAULT_INCREMENT_FORM_VALUES,
  });

  const params = useParams<{ slug: string }>();

  const {
    handleApplyIncrement,
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleEdit,
    handleOpenChangeAlertDialog,
    handleOpenChangeIncrementDialog,
    handleOpenChangePricingDialog,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    handleSubmitIncrement,
    handleSubmitPricing,
    handleUploadPricingsExcel,
  } = PricingsHandlers({
    incrementForm,
    params,
    pricingForm,
    selectedRow,
    selectedRows,
    setData,
    setLoadingIncrement,
    setLoadingPricing,
    setOpenAlert,
    setOpenIncrementDialog,
    setOpenPricingDialog,
    setSelectedRow,
    setSelectedRows,
  });

  const columns = getColumnsConfig({ handleDelete, handleEdit });
  const headerActionsProps = getHeaderActionsProps({
    handleUploadPricingsExcel,
  });
  const multipleSelectActionsProps = getMultipleSelectActionsProps({
    handleApplyIncrement,
    handleDeleteMultiple,
  });

  return {
    columns,
    data,
    handleCreate,
    handleOpenChangeAlertDialog,
    handleOpenChangeIncrementDialog,
    handleOpenChangePricingDialog,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    handleSubmitIncrement,
    handleSubmitPricing,
    headerActionsProps,
    incrementForm,
    loadingIncrement,
    loadingPricing,
    multipleSelectActionsProps,
    openAlert,
    openIncrementDialog,
    openPricingDialog,
    pricingForm,
    selectedRow,
    selectedRows,
  };
};

export { PricingsHook };
