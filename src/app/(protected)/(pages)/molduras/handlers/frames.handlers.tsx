// Vendors
import { toast } from "sonner";
// Actions
import {
  createFrame,
  deleteFrame,
  deleteMultipleFrames,
  generateUniqueReferenceNumber,
  updateFrame,
} from "../actions/frames.actions";
// Types
import type {
  FramesHandlersProps,
  FramesHandlersReturn,
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
} from "./types/frames.handlers.types";

const createHandler = async ({
  form,
  setOpenDialog,
}: CreateHandlerProps): Promise<void> => {
  const randomReferenceNumber = await generateUniqueReferenceNumber();
  form.setValue("referenceNumber", randomReferenceNumber);
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
  setExistingImages,
  setNewImages,
  setOpenDialog,
  setSelectedRow,
  setToDelete,
}: EditHandlerProps): void => {
  const transformedRow = {
    ...row,
    artistId: row.artist.id,
    colors: row.colors.map((color) => color.id),
    finishId: row.finish?.id || "",
    formatId: row.format?.id || "",
    styleId: row.style?.id || "",
    supportId: row.support?.id || "",
    images: [],
  };
  form.reset(transformedRow, { keepDefaultValues: true });
  setExistingImages(row.images.map((image) => image.url) || []);
  setNewImages([]);
  setOpenDialog(true);
  setSelectedRow(row);
  setToDelete([]);
};

const navigateHandler = ({ row, router }: NavigateHandlerProps): void => {
  router.push(`/galeria/${row.id}`);
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
  setExistingImages,
  setNewImages,
  setOpenDialog,
  setSelectedRow,
}: OpenChangeDialogHandlerProps): void => {
  form.reset();
  setExistingImages([]);
  setNewImages([]);
  setSelectedRow(null);
  setOpenDialog(open);
};

const submitHandler = ({
  form,
  newImages,
  selectedRow,
  setData,
  setLoading,
  setOpenDialog,
  setSelectedRow,
  toDelete,
  values,
}: SubmitHandlerProps): void => {
  if (selectedRow) {
    submitHandlerEdit({
      form,
      newImages,
      selectedRow,
      setData,
      setLoading,
      setOpenDialog,
      setSelectedRow,
      toDelete,
      values,
    });
  } else {
    submitHandlerCreate({
      form,
      newImages,
      setData,
      setLoading,
      setOpenDialog,
      values,
    });
  }
};

const submitHandlerCreate = async ({
  form,
  newImages,
  setData,
  setLoading,
  setOpenDialog,
  values,
}: SubmitHandlerCreateProps): Promise<void> => {
  setLoading(true);

  try {
    const { frame, error, success } = await createFrame({
      newImages,
      values,
    });

    if (error) {
      toast.error(error);
      return;
    }

    if (success && frame) {
      setData((prev) => [...prev, frame]);
      form.reset();
      setOpenDialog(false);
      toast.success(success);
    }
  } catch (error) {
    console.error(error);
    toast.error("Error al crear la moldura. Por favor, inténtalo de nuevo");
  } finally {
    setLoading(false);
  }
};

const submitHandlerEdit = async ({
  form,
  newImages,
  selectedRow,
  setData,
  setLoading,
  setOpenDialog,
  setSelectedRow,
  toDelete,
  values,
}: SubmitHandlerEditProps): Promise<void> => {
  if (!selectedRow) {
    return;
  }

  setLoading(true);

  try {
    const { frame, error, success } = await updateFrame({
      id: selectedRow.id,
      newImages,
      toDelete,
      values,
    });

    if (error) {
      toast.error(error);
      return;
    }

    if (success && frame) {
      setData((prev) =>
        prev.map((item) => (item.id === frame.id ? frame : item)),
      );
      form.reset();
      setOpenDialog(false);
      setSelectedRow(null);
      toast.success(success);
    }
  } catch (error) {
    console.error(error);
    toast.error(
      "Error al actualizar la moldura. Por favor, inténtalo de nuevo",
    );
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
    const { success, error } = await deleteFrame({ id: selectedRow.id });

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
    toast.error("Error al eliminar la moldura. Por favor, inténtalo de nuevo");
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
    const { success, error } = await deleteMultipleFrames({
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
    toast.error(
      "Error al eliminar las molduras. Por favor, inténtalo de nuevo",
    );
  } finally {
    setLoading(false);
  }
};

const FramesHandlers = ({
  form,
  newImages,
  router,
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
}: FramesHandlersProps): FramesHandlersReturn => {
  return {
    handleCreate: () => createHandler({ form, setOpenDialog }),
    handleDelete: (row) => deleteHandler({ row, setSelectedRow, setOpenAlert }),
    handleDeleteMultiple: (rows) =>
      deleteMultipleHandler({ rows, setSelectedRows, setOpenAlert }),
    handleEdit: (row) =>
      editHandler({
        form,
        row,
        setExistingImages,
        setNewImages,
        setOpenDialog,
        setSelectedRow,
        setToDelete,
      }),
    handleNavigate: (row) => navigateHandler({ row, router }),
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
        setExistingImages,
        setNewImages,
        setOpenDialog,
        setSelectedRow,
      }),
    handleSubmit: (values) =>
      submitHandler({
        form,
        newImages,
        selectedRow,
        setData,
        setLoading,
        setOpenDialog,
        setSelectedRow,
        toDelete,
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

export { FramesHandlers };
