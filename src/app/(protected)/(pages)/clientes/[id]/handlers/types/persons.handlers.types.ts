// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Person } from "../../types/persons.container.types";
import type { PersonSchema } from "../../schemas/types/person.schema.types";

type PersonsHandlersProps = {
  form: UseFormReturn<PersonSchema>;
  observations: string;
  params: { id: string };
  selectedRow: Person | null;
  selectedRows: Person[];
  setData: Dispatch<SetStateAction<Person[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSaved: Dispatch<SetStateAction<boolean>>;
  setSaving: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Person | null>>;
  setSelectedRows: Dispatch<SetStateAction<Person[]>>;
};

type PersonsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Person) => void;
  handleDeleteMultiple: (rows: Person[]) => void;
  handleEdit: (row: Person) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSaveObservations: () => Promise<void>;
  handleSubmit: (values: PersonSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<PersonsHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  PersonsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Person };

type DeleteMultipleHandlerProps = Pick<
  PersonsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Person[];
};

type EditHandlerProps = Pick<
  PersonsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Person;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  PersonsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  PersonsHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "params" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  PersonsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  PersonsHandlersProps,
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
  PersonsHandlersProps,
  | "form"
  | "params"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: PersonSchema;
};

export type {
  PersonsHandlersProps,
  PersonsHandlersReturn,
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
