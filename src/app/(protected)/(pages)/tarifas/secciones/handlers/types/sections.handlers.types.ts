// Vendors
import { useRouter } from "next/navigation";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Section } from "../../types/sections.container.types";
import type { SectionSchema } from "../../schemas/types/section.schema.types";

type SectionsHandlersProps = {
  form: UseFormReturn<SectionSchema>;
  router: ReturnType<typeof useRouter>;
  selectedRow: Section | null;
  selectedRows: Section[];
  setData: Dispatch<SetStateAction<Section[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Section | null>>;
  setSelectedRows: Dispatch<SetStateAction<Section[]>>;
};

type SectionsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Section) => void;
  handleDeleteMultiple: (rows: Section[]) => void;
  handleEdit: (row: Section) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: SectionSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<SectionsHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  SectionsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Section };

type DeleteMultipleHandlerProps = Pick<
  SectionsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Section[];
};

type EditHandlerProps = Pick<
  SectionsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Section;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  SectionsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  SectionsHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "router" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  SectionsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  SectionsHandlersProps,
  "selectedRows" | "setData" | "setLoading" | "setSelectedRows"
>;

type SubmitHandlerEditProps = Pick<
  SubmitHandlerProps,
  | "form"
  | "router"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "values"
>;

type SubmitHandlerProps = Pick<
  SectionsHandlersProps,
  | "form"
  | "router"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: SectionSchema;
};

export type {
  SectionsHandlersProps,
  SectionsHandlersReturn,
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
