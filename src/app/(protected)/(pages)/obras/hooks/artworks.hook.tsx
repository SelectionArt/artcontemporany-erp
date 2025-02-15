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
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [previews, setPreviews] = useState<string[]>([]);
  const [selectedRow, setSelectedRow] = useState<Artwork | null>(null);
  const [selectedRows, setSelectedRows] = useState<Artwork[]>([]);

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
    selectedRow,
    selectedRows,
    setData,
    setLoading,
    setOpenAlert,
    setOpenDialog,
    setSelectedRow,
    setSelectedRows,
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
    previews,
    selectedRow,
    selectedRows,
    setPreviews,  
  };
};

export { ArtworksHook };
