// Vendors
import { format } from "date-fns";
import { toast } from "sonner";
// Actions
import {
  createBudget,
  deleteBudget,
  deleteMultipleBudgets,
  gneratePDF,
  generateUniqueRandomNumber,
  updateBudget,
} from "../actions/budgets.actions";
// Types
import type {
  BudgetsHandlersProps,
  BudgetsHandlersReturn,
  CreateHandlerProps,
  DeleteHandlerProps,
  DeleteMultipleHandlerProps,
  DownloadPDFHandlerProps,
  EditHandlerProps,
  OpenChangeAlertDialogHandlerProps,
  OpenChangeDialogHandlerProps,
  OpenChangeSignatureDialogHandlerProps,
  SignHandlerProps,
  SubmitHandlerCreateProps,
  SubmitHandlerDeleteMultipleProps,
  SubmitHandlerDeleteProps,
  SubmitHandlerEditProps,
  SubmitHandlerProps,
} from "./types/budgets.handlers.types";

const createHandler = async ({
  form,
  setOpenDialog,
}: CreateHandlerProps): Promise<void> => {
  const date = format(new Date(), "yyyy-MM-dd");
  form.setValue("date", date);
  const uniqueRandomNumber = await generateUniqueRandomNumber();
  form.setValue("number", uniqueRandomNumber);
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

const downloadPDFHandler = async ({
  row,
  type,
}: DownloadPDFHandlerProps): Promise<void> => {
  const { pdf, fileName } = await gneratePDF({ id: row.id, type });
  const blob = new Blob([pdf], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const editHandler = ({
  form,
  row,
  setSelectedRow,
  setOpenDialog,
}: EditHandlerProps): void => {
  console.log("editHandler", row);
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

const openChangeSignatureDialogHandler = ({
  open,
  setOpenSignatureDialog,
}: OpenChangeSignatureDialogHandlerProps): void => {
  setOpenSignatureDialog(open);
};

const signHandler = ({
  // row,
  setOpenSignatureDialog,
}: SignHandlerProps): void => {
  setOpenSignatureDialog(true);
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
    const { budget, error, success } = await createBudget({ values });

    if (error) {
      toast.error(error);
      return;
    }

    if (success && budget) {
      setData((prev) =>
        [...prev, budget].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        ),
      );
      form.reset();
      setOpenDialog(false);
      toast.success(success);
    }
  } catch (error) {
    console.error(error);
    toast.error("Error al crear el presupuesto. Por favor, inténtalo de nuevo");
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
    const { budget, error, success } = await updateBudget({
      id: selectedRow.id,
      values,
    });

    if (error) {
      toast.error(error);
      return;
    }

    if (success && budget) {
      setData((prev) =>
        prev
          .map((item) => (item.id === budget.id ? budget : item))
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          ),
      );
      form.reset();
      setOpenDialog(false);
      setSelectedRow(null);
      toast.success(success);
    }
  } catch (error) {
    console.error(error);
    toast.error(
      "Error al actualizar el presupuesto. Por favor, inténtalo de nuevo",
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
    const { success, error } = await deleteBudget({ id: selectedRow.id });

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
    toast.error(
      "Error al eliminar el presupuesto. Por favor, inténtalo de nuevo",
    );
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
    const { success, error } = await deleteMultipleBudgets({
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
      "Error al eliminar los presupuestos. Por favor, inténtalo de nuevo",
    );
  } finally {
    setLoading(false);
  }
};

const BudgetsHandlers = ({
  form,
  selectedRow,
  selectedRows,
  setData,
  setLoading,
  setOpenAlert,
  setOpenDialog,
  setOpenSignatureDialog,
  setSelectedRow,
  setSelectedRows,
}: BudgetsHandlersProps): BudgetsHandlersReturn => {
  return {
    handleCreate: () => createHandler({ form, setOpenDialog }),
    handleDelete: (row) => deleteHandler({ row, setSelectedRow, setOpenAlert }),
    handleDeleteMultiple: (rows) =>
      deleteMultipleHandler({ rows, setSelectedRows, setOpenAlert }),
    handleDownloadPDF: ({ row, type }) => downloadPDFHandler({ row, type }),
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
    handleOpenChangeSignatureDialog: (open) =>
      openChangeSignatureDialogHandler({
        open,
        setOpenSignatureDialog,
      }),
    handleSign: (row) => signHandler({ row, setOpenSignatureDialog }),
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

export { BudgetsHandlers };
