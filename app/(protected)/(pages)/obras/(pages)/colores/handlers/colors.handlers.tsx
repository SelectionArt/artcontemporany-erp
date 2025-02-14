// Vendors
import { toast } from "sonner";
// Actions
import {
  createColor,
  deleteColor,
  deleteMultipleColors,
  updateColor,
} from "../actions/colors.actions";
// Types
import type {
  ColorsHandlersProps,
  ColorsHandlersReturn,
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
} from "./types/colors.handlers.types";

const createHandler = ({ setOpenDialog }: CreateHandlerProps): void => {
  setOpenDialog(true);
};

const deleteHandler = ({
  row,
  setSelectedRow,
  setOpenAlert,
}: DeleteHandlerProps): void => {
  setSelectedRow(row);
  setOpenAlert(true);
};

const deleteMultipleHandler = ({
  rows,
  setSelectedRows,
  setOpenAlert,
}: DeleteMultipleHandlerProps): void => {
  setSelectedRows(rows);
  setOpenAlert(true);
};

const editHandler = ({
  form,
  row,
  setSelectedRow,
  setOpenDialog,
}: EditHandlerProps): void => {
  form.reset(row, { keepDefaultValues: true });
  setSelectedRow(row);
  setOpenDialog(true);
};

const openChangeAlertDialogHandler = ({
  open,
  selectedRow,
  selectedRows,
  setOpenAlert,
  setSelectedRow,
  setSelectedRows,
}: OpenChangeAlertDialogHandlerProps): void => {
  setOpenAlert(open);

  if (!open && selectedRow) {
    setSelectedRow(null);
  }

  if (!open && selectedRows.length) {
    setSelectedRows([]);
  }
};

const openChangeDialogHandler = ({
  form,
  open,
  selectedRow,
  setOpenDialog,
  setSelectedRow,
}: OpenChangeDialogHandlerProps): void => {
  setOpenDialog(open);

  if (!open && selectedRow) {
    form.reset();
    setSelectedRow(null);
  }
};

const submitHandler = ({
  form,
  selectedRow,
  setData,
  setLoading,
  setOpenDialog,
  setSelectedRow,
  values,
}: SubmitHandlerProps): void => {
  if (selectedRow) {
    submitHandlerEdit({
      selectedRow,
      form,
      setData,
      setLoading,
      setOpenDialog,
      setSelectedRow,
      values,
    });
  } else {
    submitHandlerCreate({
      form,
      setData,
      setLoading,
      setOpenDialog,
      values,
    });
  }
};

const submitHandlerCreate = async ({
  form,
  setData,
  setLoading,
  setOpenDialog,
  values,
}: SubmitHandlerCreateProps): Promise<void> => {
  setLoading(true);

  try {
    const { color, error, success } = await createColor({ values });

    if (error) {
      toast.error(error);
      return;
    }

    if (success && color) {
      setData((prev) =>
        [...prev, color].sort((a, b) => a.name.localeCompare(b.name)),
      );
      form.reset();
      setOpenDialog(false);
      toast.success(success);
    }
  } catch (error) {
    console.error(error);
    toast.error("Error al crear el color. Por favor, inténtalo de nuevo");
  } finally {
    setLoading(false);
  }
};

const submitHandlerEdit = async ({
  form,
  selectedRow,
  setData,
  setLoading,
  setOpenDialog,
  setSelectedRow,
  values,
}: SubmitHandlerEditProps): Promise<void> => {
  if (!selectedRow) {
    return;
  }

  setLoading(true);

  try {
    const { color, error, success } = await updateColor({
      id: selectedRow.id,
      values,
    });

    if (error) {
      toast.error(error);
      return;
    }

    if (success && color) {
      setData((prev) =>
        prev
          .map((item) => (item.id === color.id ? color : item))
          .sort((a, b) => a.name.localeCompare(b.name)),
      );
      form.reset();
      setOpenDialog(false);
      setSelectedRow(null);
      toast.success(success);
    }
  } catch (error) {
    console.error(error);
    toast.error("Error al actualizar el color. Por favor, inténtalo de nuevo");
  } finally {
    setLoading(false);
  }
};

const submitHandlerDelete = async ({
  selectedRow,
  setData,
  setLoading,
}: SubmitHandlerDeleteProps): Promise<void> => {
  if (!selectedRow) {
    return;
  }

  setLoading(true);

  try {
    const { success, error } = await deleteColor({ id: selectedRow.id });

    if (error) {
      toast.error(error);
      return;
    }

    if (success) {
      setData((prev) => prev.filter((item) => item.id !== selectedRow.id));
      toast.success(success);
    }
  } catch (error) {
    console.error(error);
    toast.error("Error al eliminar el color. Por favor, inténtalo de nuevo");
  } finally {
    setLoading(false);
  }
};

const submitHandlerDeleteMultiple = async ({
  selectedRows,
  setData,
  setLoading,
  setSelectedRows,
}: SubmitHandlerDeleteMultipleProps): Promise<void> => {
  setLoading(true);
  try {
    const { success, error } = await deleteMultipleColors({
      ids: selectedRows.map((row) => row.id),
    });

    if (error) {
      toast.error(error);
      return;
    }

    if (success) {
      setData((prev) =>
        prev.filter((item) => !selectedRows.some((row) => row.id === item.id)),
      );
      toast.success(success);
      setSelectedRows([]);
    }
  } catch (error) {
    console.error(error);
    toast.error("Error al eliminar los colores. Por favor, inténtalo de nuevo");
  } finally {
    setLoading(false);
  }
};

const ColorsHandlers = ({
  form,
  selectedRow,
  selectedRows,
  setData,
  setLoading,
  setOpenAlert,
  setOpenDialog,
  setSelectedRow,
  setSelectedRows,
}: ColorsHandlersProps): ColorsHandlersReturn => {
  return {
    handleCreate: () => createHandler({ setOpenDialog }),
    handleDelete: (row) => deleteHandler({ row, setSelectedRow, setOpenAlert }),
    handleDeleteMultiple: (rows) =>
      deleteMultipleHandler({ rows, setSelectedRows, setOpenAlert }),
    handleEdit: (row) =>
      editHandler({
        form,
        row,
        setSelectedRow,
        setOpenDialog,
      }),
    handleOpenChangeAlertDialog: (open) =>
      openChangeAlertDialogHandler({
        open,
        selectedRow,
        selectedRows,
        setSelectedRow,
        setSelectedRows,
        setOpenAlert,
      }),
    handleOpenChangeDialog: (open) =>
      openChangeDialogHandler({
        form,
        open,
        selectedRow,
        setOpenDialog,
        setSelectedRow,
      }),
    handleSubmit: (values) =>
      submitHandler({
        form,
        selectedRow,
        setData,
        setLoading,
        setOpenDialog,
        setSelectedRow,
        values,
      }),
    handleSubmitDelete: () =>
      submitHandlerDelete({ selectedRow, setData, setLoading }),
    handleSubmitDeleteMultiple: () =>
      submitHandlerDeleteMultiple({
        selectedRows,
        setData,
        setLoading,
        setSelectedRows,
      }),
  };
};

export { ColorsHandlers };
