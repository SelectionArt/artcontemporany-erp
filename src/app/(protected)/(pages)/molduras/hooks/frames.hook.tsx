"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/frames.constants";
// Handlers
import { FramesHandlers } from "../handlers/frames.handlers";
// Schemas
import { frameSchema } from "../schemas/frame.schema";
// Types
import type { Frame } from "../types/frames.container.types";
import type { FrameSchema } from "../schemas/types/frame.schema.types";
import type {
  FramesHookProps,
  FramesHookReturn,
} from "./types/frames.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/frames.hook.utils";

const FramesHook = ({ frames }: FramesHookProps): FramesHookReturn => {
  const [data, setData] = useState<Frame[]>(frames);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Frame | null>(null);
  const [selectedRows, setSelectedRows] = useState<Frame[]>([]);
  const [toDelete, setToDelete] = useState<string[]>([]);

  const form = useForm<FrameSchema>({
    resolver: zodResolver(frameSchema),
    defaultValues: constants.DEFAULT_FORM_VALUES,
  });

  const router = useRouter();

  const {
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleEdit,
    handleNavigate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
  } = FramesHandlers({
    form,
    newImages,
    router,
    selectedRow,
    selectedRows,
    setData,
    setExistingImages,
    setLoading,
    setNewImages,
    setOpenAlert,
    setOpenDialog,
    setSelectedRow,
    setSelectedRows,
    setToDelete,
    toDelete,
  });

  const columns = getColumnsConfig({
    handleDelete,
    handleEdit,
    handleNavigate,
  });
  const multipleSelectActionsProps = getMultipleSelectActionsProps({
    handleDeleteMultiple,
  });

  return {
    columns,
    data,
    existingImages,
    form,
    handleCreate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    loading,
    multipleSelectActionsProps,
    newImages,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
    setExistingImages,
    setNewImages,
    setToDelete,
    toDelete,
  };
};

export { FramesHook };
