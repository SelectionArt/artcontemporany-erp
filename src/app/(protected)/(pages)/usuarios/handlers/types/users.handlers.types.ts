// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { User } from "../../types/users.container.types";
import type { UserSchema } from "../../schemas/types/user.schema.types";

type UsersHandlersProps = {
  form: UseFormReturn<UserSchema>;
  selectedRow: User | null;
  selectedRows: User[];
  setData: Dispatch<SetStateAction<User[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<User | null>>;
  setSelectedRows: Dispatch<SetStateAction<User[]>>;
};

type UsersHandlersReturn = {
  handleDelete: (row: User) => void;
  handleDeleteMultiple: (rows: User[]) => void;
  handleEdit: (row: User) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: UserSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type DeleteHandlerProps = Pick<
  UsersHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: User };

type DeleteMultipleHandlerProps = Pick<
  UsersHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: User[];
};

type EditHandlerProps = Pick<
  UsersHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: User;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  UsersHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  UsersHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  UsersHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  UsersHandlersProps,
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
  UsersHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: UserSchema;
};

export type {
  UsersHandlersProps,
  UsersHandlersReturn,
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
