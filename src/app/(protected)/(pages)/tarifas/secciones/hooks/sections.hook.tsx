"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/sections.constants";
// Handlers
import { SectionsHandlers } from "../handlers/sections.handlers";
// Schemas
import { sectionSchema } from "../schemas/section.schema";
// Types
import type { Section } from "../types/sections.container.types";
import type { SectionSchema } from "../schemas/types/section.schema.types";
import type {
  SectionsHookProps,
  SectionsHookReturn,
} from "./types/sections.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/sections.hook.utils";

const SectionsHook = ({
  initialData,
}: SectionsHookProps): SectionsHookReturn => {
  const [data, setData] = useState<Section[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Section | null>(null);
  const [selectedRows, setSelectedRows] = useState<Section[]>([]);

  const router = useRouter();

  const form = useForm<SectionSchema>({
    resolver: zodResolver(sectionSchema),
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
  } = SectionsHandlers({
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

export { SectionsHook };
