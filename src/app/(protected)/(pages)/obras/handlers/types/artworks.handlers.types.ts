// Types
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { Artwork } from "../../types/artworks.container.types";
import type { ArtworkSchema } from "../../schemas/types/artwork.schema.types";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";

type ArtworksHandlersProps = {
  form: UseFormReturn<ArtworkSchema>;
  newImages: File[];
  router: AppRouterInstance;
  selectedRow: Artwork | null;
  selectedRows: Artwork[];
  setData: Dispatch<SetStateAction<Artwork[]>>;
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Artwork | null>>;
  setSelectedRows: Dispatch<SetStateAction<Artwork[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

type ArtworksHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Artwork) => void;
  handleDeleteMultiple: (rows: Artwork[]) => void;
  handleEdit: (row: Artwork) => void;
  handleNavigate: (row: Artwork) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: ArtworkSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<ArtworksHandlersProps, "form" | "setOpenDialog">;

type DeleteHandlerProps = Pick<
  ArtworksHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Artwork };

type DeleteMultipleHandlerProps = Pick<
  ArtworksHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Artwork[];
};

type EditHandlerProps = Pick<
  ArtworksHandlersProps,
  | "form"
  | "setExistingImages"
  | "setNewImages"
  | "setSelectedRow"
  | "setOpenDialog"
  | "setToDelete"
> & {
  row: Artwork;
};

type NavigateHandlerProps = Pick<ArtworksHandlersProps, "router"> & {
  row: Artwork;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  ArtworksHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  ArtworksHandlersProps,
  | "form"
  | "setExistingImages"
  | "setNewImages"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "newImages" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  ArtworksHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  ArtworksHandlersProps,
  "selectedRows" | "setData" | "setLoading" | "setSelectedRows"
>;

type SubmitHandlerEditProps = Pick<
  SubmitHandlerProps,
  | "form"
  | "newImages"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "toDelete"
  | "values"
>;

type SubmitHandlerProps = Pick<
  ArtworksHandlersProps,
  | "form"
  | "newImages"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "toDelete"
> & {
  values: ArtworkSchema;
};

export type {
  ArtworksHandlersProps,
  ArtworksHandlersReturn,
  CreateHandlerProps,
  DeleteHandlerProps,
  DeleteMultipleHandlerProps,
  EditHandlerProps,
  NavigateHandlerProps,
  OpenChangeAlertDialogHandlerProps,
  OpenChangeDialogHandlerProps,
  SubmitHandlerCreateProps,
  SubmitHandlerDeleteMultipleProps,
  SubmitHandlerDeleteProps,
  SubmitHandlerEditProps,
  SubmitHandlerProps,
};
