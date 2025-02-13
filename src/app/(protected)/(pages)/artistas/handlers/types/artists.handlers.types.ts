// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Artist } from "../../types/artists.container.types";
import type { ArtistSchema } from "../../schemas/types/artist.schema.types";

type ArtistsHandlersProps = {
  form: UseFormReturn<ArtistSchema>;
  selectedRow: Artist | null;
  selectedRows: Artist[];
  setData: Dispatch<SetStateAction<Artist[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Artist | null>>;
  setSelectedRows: Dispatch<SetStateAction<Artist[]>>;
};

type ArtistsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Artist) => void;
  handleDeleteMultiple: (rows: Artist[]) => void;
  handleEdit: (row: Artist) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: ArtistSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<ArtistsHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  ArtistsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Artist };

type DeleteMultipleHandlerProps = Pick<
  ArtistsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Artist[];
};

type EditHandlerProps = Pick<
  ArtistsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Artist;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  ArtistsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  ArtistsHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  ArtistsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  ArtistsHandlersProps,
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
  ArtistsHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: ArtistSchema;
};

export type {
  ArtistsHandlersProps,
  ArtistsHandlersReturn,
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
