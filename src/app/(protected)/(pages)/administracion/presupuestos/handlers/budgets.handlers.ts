// Vendors
import { format } from "date-fns";
import { toast } from "sonner";
// Actions
import {
  createBudget,
  deleteBudget,
  deleteMultipleBudgets,
  fetchEmails,
  gneratePDF,
  generateUniqueRandomNumber,
  signBudget,
  updateBudget,
  sendEmail,
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
  OpenChangeSendEmailDialogHandlerProps,
  OpenChangeSignatureDialogHandlerProps,
  OpenSignHandlerProps,
  PreviewPDFHandlerProps,
  SendEmailHandlerProps,
  SignHandlerProps,
  SubmitHandlerCreateProps,
  SubmitHandlerDeleteMultipleProps,
  SubmitHandlerDeleteProps,
  SubmitHandlerEditProps,
  SubmitHandlerProps,
  SubmitEmailHandlerProps,
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

const openChangeSendEmailDialogHandler = ({
  open,
  setOpenSendEmailDialog,
}: OpenChangeSendEmailDialogHandlerProps): void => {
  setOpenSendEmailDialog(open);
};

const openChangeSignatureDialogHandler = ({
  open,
  setOpenSignatureDialog,
}: OpenChangeSignatureDialogHandlerProps): void => {
  setOpenSignatureDialog(open);
};

const openSignHandler = ({
  row,
  setOpenSignatureDialog,
  setSelectedRow,
}: OpenSignHandlerProps): void => {
  setOpenSignatureDialog(true);
  setSelectedRow(row);
};

const previewPDFHandler = async ({
  row,
  type,
}: PreviewPDFHandlerProps): Promise<void> => {
  const { pdf } = await gneratePDF({ id: row.id, type });
  const blob = new Blob([pdf], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  const newWindow = window.open();
  if (newWindow) {
    newWindow.document.write(`
      <html>
        <head>
          <style>
            html, body {
              margin: 0;
              padding: 0;
              height: 100%;
              overflow: hidden;
            }
            iframe {
              width: 100%;
              height: 100%;
              border: none;
            }
          </style>
        </head>
        <body>
          <iframe src="${url}"></iframe>
        </body>
      </html>
    `);
    newWindow.document.close();
  } else {
    window.location.href = url;
  }
};

const sendEmailHandler = async ({
  row,
  // type,
  setOpenSendEmailDialog,
  setSelectedRow,
  setSendEmails,
}: SendEmailHandlerProps): Promise<void> => {
  const emails = await fetchEmails({ id: row.clientId });
  console.log("emails", emails);
  setOpenSendEmailDialog(true);
  setSelectedRow(row);
  setSendEmails(
    emails.map((email) => ({ label: email.email, value: email.email })),
  );
};

const signHandler = async ({
  selectedRow,
  signatureRef,
  setOpenSignatureDialog,
  setSignLoading,
  setData,
}: SignHandlerProps): Promise<void> => {
  if (!selectedRow) {
    return;
  }

  setSignLoading(true);

  try {
    const signature = signatureRef?.current?.toDataURL();

    if (!signature) {
      throw new Error("No se pudo obtener la firma.");
    }

    const imageUrl = await signBudget({ id: selectedRow.id, signature });

    setData((prev) =>
      prev.map((item) =>
        item.id === selectedRow.id
          ? { ...item, signature: { imageUrl } }
          : item,
      ),
    );

    toast.success("Presupuesto firmado correctamente");
    setOpenSignatureDialog(false);
  } catch (error) {
    console.error("Error al firmar el presupuesto:", error);
    toast.error("Ocurrió un error al firmar el presupuesto.");
  } finally {
    setSignLoading(false);
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
    const { budget, error, success } = await createBudget({ values });

    if (error) {
      toast.error(error);
      return;
    }

    if (success && budget) {
      setData((prev) =>
        [...prev, budget].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
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
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
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

const submitEmailHandler = async ({
  sendEmailForm,
  setSendEmails,
  setSelectedRow,
  setOpenSendEmailDialog,
  setEmailLoading,
  values,
  selectedRow,
}: SubmitEmailHandlerProps): Promise<void> => {
  if (!selectedRow) {
    return;
  }
  try {
    setEmailLoading(true);

    console.log("values", values);

    const recipientEmails: string[] = [
      ...(values.emails ?? []),
      values.email,
    ].filter((email): email is string => Boolean(email));

    if (recipientEmails.length === 0) {
      throw new Error("No hay correos electrónicos para enviar.");
    }

    const { pdf, fileName } = await gneratePDF({
      id: selectedRow.id,
      type: values.type as
        | "budget"
        | "invoice"
        | "deliveryNote"
        | "orderConfirmation",
    });

    if (!pdf) {
      throw new Error("Error al generar el PDF.");
    }

    const pdfBlob = new Blob([pdf], { type: "application/pdf" });

    const response = await sendEmail({
      emails: recipientEmails,
      subject: values.subject.replace("{{type}}", values.type),
      message: values.message.replace("{{type}}", values.type),
      file: pdfBlob,
      fileName,
      type: values.type,
    });

    if (!response.success) {
      toast.error("Ocurrió un error al enviar el email.");
    }

    toast.success("Email enviado correctamente");

    sendEmailForm.reset();
    setSendEmails([]);
    setSelectedRow(null);
    setOpenSendEmailDialog(false);
  } catch (error) {
    console.error("Error en submitEmailHandler:", error);
    toast.error("Ocurrió un error al enviar el email.");
  } finally {
    setEmailLoading(false);
  }
};

const BudgetsHandlers = ({
  form,
  sendEmailForm,
  selectedRow,
  selectedRows,
  setData,
  setLoading,
  setOpenAlert,
  setOpenDialog,
  setOpenSendEmailDialog,
  setOpenSignatureDialog,
  setSendEmails,
  setSelectedRow,
  setSelectedRows,
  setSignLoading,
  signatureRef,
  setEmailLoading,
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
    handleOpenChangeSendEmailDialog: (open) =>
      openChangeSendEmailDialogHandler({
        open,
        setOpenSendEmailDialog,
      }),
    handleOpenChangeSignatureDialog: (open) =>
      openChangeSignatureDialogHandler({
        open,
        setOpenSignatureDialog,
      }),
    handleOpenSign: (row) =>
      openSignHandler({
        row,
        setOpenSignatureDialog,
        setSelectedRow,
      }),
    handlePreviewPDF: ({ row, type }) => previewPDFHandler({ row, type }),
    handleSendEmail: ({ row, type }) =>
      sendEmailHandler({
        row,
        type,
        setOpenSendEmailDialog,
        setSelectedRow,
        setSendEmails,
      }),
    handleSign: () =>
      signHandler({
        selectedRow,
        signatureRef,
        setData,
        setOpenSignatureDialog,
        setSignLoading,
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
    handleSubmitEmail: (values) =>
      submitEmailHandler({
        selectedRow,
        sendEmailForm,
        setSendEmails,
        setSelectedRow,
        setOpenSendEmailDialog,
        setEmailLoading,
        values,
      }),
  };
};

export { BudgetsHandlers };
