"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/artworks.constants";
// Handlers
import { ArtworksHandlers } from "../handlers/artworks.handlers";
// Schemas
import { artworkSchema } from "../schemas/artwork.schema";
// Types
import type { Artwork } from "../types/artworks.container.types";
import type { ArtworkSchema } from "../schemas/types/artwork.schema.types";
import type {
  ArtworksHookProps,
  ArtworksHookReturn,
} from "./types/artworks.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/artworks.hook.utils";

const ArtworksHook = ({ artworks }: ArtworksHookProps): ArtworksHookReturn => {
  const [data, setData] = useState<Artwork[]>(artworks);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Artwork | null>(null);
  const [selectedRows, setSelectedRows] = useState<Artwork[]>([]);
  const [toDelete, setToDelete] = useState<string[]>([]);

  const form = useForm<ArtworkSchema>({
    resolver: zodResolver(artworkSchema),
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
  } = ArtworksHandlers({
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

export { ArtworksHook };
