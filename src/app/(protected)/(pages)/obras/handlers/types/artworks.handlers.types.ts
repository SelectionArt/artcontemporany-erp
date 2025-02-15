// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Artwork } from "../../types/artworks.container.types";
import type { ArtworkSchema } from "../../schemas/types/artwork.schema.types";

type ArtworksHandlersProps = {
  form: UseFormReturn<ArtworkSchema>;
  selectedRow: Artwork | null;
  selectedRows: Artwork[];
  setData: Dispatch<SetStateAction<Artwork[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Artwork | null>>;
  setSelectedRows: Dispatch<SetStateAction<Artwork[]>>;
};

type ArtworksHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Artwork) => void;
  handleDeleteMultiple: (rows: Artwork[]) => void;
  handleEdit: (row: Artwork) => void;
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
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
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
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
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
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "values"
>;

type SubmitHandlerProps = Pick<
  ArtworksHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
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
  OpenChangeAlertDialogHandlerProps,
  OpenChangeDialogHandlerProps,
  SubmitHandlerCreateProps,
  SubmitHandlerDeleteMultipleProps,
  SubmitHandlerDeleteProps,
  SubmitHandlerEditProps,
  SubmitHandlerProps,
};
