"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/artists.constants";
// Handlers
import { ArtistsHandlers } from "../handlers/artists.handlers";
// Schemas
import { artistSchema } from "../schemas/artist.schema";
// Types
import type { Artist } from "../types/artists.container.types";
import type { ArtistSchema } from "../schemas/types/artist.schema.types";
import type {
  ArtistsHookProps,
  ArtistsHookReturn,
} from "./types/artists.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/artists.hook.utils";

const ArtistsHook = ({ initialData }: ArtistsHookProps): ArtistsHookReturn => {
  const [data, setData] = useState<Artist[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Artist | null>(null);
  const [selectedRows, setSelectedRows] = useState<Artist[]>([]);

  const form = useForm<ArtistSchema>({
    resolver: zodResolver(artistSchema),
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
  } = ArtistsHandlers({
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

  const columns = getColumnsConfig<Artist>({ handleDelete, handleEdit });
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

export { ArtistsHook };
