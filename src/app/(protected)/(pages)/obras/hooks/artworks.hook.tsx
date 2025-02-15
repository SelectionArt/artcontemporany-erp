"use client";
// Vendors
import { useForm } from "react-hook-form";
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

const ArtworksHook = ({
  artists,
  colors,
  finishes,
  formats,
  initialData,
  styles,
  supports,
}: ArtworksHookProps): ArtworksHookReturn => {
  const [data, setData] = useState<Artwork[]>(initialData);
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
  } = ArtworksHandlers({
    form,
    newImages,
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
    artists,
    colors,
    finishes,
    formats,
    handleDelete,
    handleEdit,
    styles,
    supports,
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
