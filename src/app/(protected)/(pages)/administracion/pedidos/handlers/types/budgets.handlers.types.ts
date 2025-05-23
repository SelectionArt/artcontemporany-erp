// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Budget } from "../../types/budgets.container.types";
import type {
  BudgetSchema,
  SendEmailSchema,
} from "../../schemas/types/budget.schema.types";
import type SignatureCanvas from "react-signature-canvas";

type BudgetsHandlersProps = {
  form: UseFormReturn<BudgetSchema>;
  sendEmailForm: UseFormReturn<SendEmailSchema>;
  selectedRow: Budget | null;
  selectedRows: Budget[];
  setData: Dispatch<SetStateAction<Budget[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setOpenSendEmailDialog: Dispatch<SetStateAction<boolean>>;
  setOpenSignatureDialog: Dispatch<SetStateAction<boolean>>;
  setSendEmails: Dispatch<
    SetStateAction<Array<{ label: string; value: string }>>
  >;

  setSelectedRow: Dispatch<SetStateAction<Budget | null>>;
  setSelectedRows: Dispatch<SetStateAction<Budget[]>>;
  setSignLoading: Dispatch<SetStateAction<boolean>>;
  signatureRef: React.RefObject<SignatureCanvas | null>;
  setEmailLoading: Dispatch<SetStateAction<boolean>>;
};

type BudgetsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Budget) => void;
  handleDeleteMultiple: (rows: Budget[]) => void;
  handleDownloadPDF: ({
    row,
    type,
  }: {
    row: Budget;
    type: "budget" | "invoice" | "deliveryNote" | "orderConfirmation";
  }) => void;
  handleEdit: (row: Budget) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleOpenChangeSendEmailDialog: (open: boolean) => void;
  handleOpenChangeSignatureDialog: (open: boolean) => void;
  handleOpenSign: (row: Budget) => void;
  handlePreviewPDF: ({
    row,
    type,
  }: {
    row: Budget;
    type: "budget" | "invoice" | "deliveryNote" | "orderConfirmation";
  }) => void;
  handleSendEmail: ({
    row,
    type,
  }: {
    row: Budget;
    type: "budget" | "invoice" | "deliveryNote" | "orderConfirmation";
  }) => void;
  handleSign: () => void;
  handleSubmit: (values: BudgetSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
  handleSubmitEmail: (values: SendEmailSchema) => void;
};

type CreateHandlerProps = Pick<BudgetsHandlersProps, "form" | "setOpenDialog">;

type DeleteHandlerProps = Pick<
  BudgetsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Budget };

type DeleteMultipleHandlerProps = Pick<
  BudgetsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Budget[];
};

type DownloadPDFHandlerProps = {
  row: Budget;
  type: "budget" | "invoice" | "deliveryNote" | "orderConfirmation";
};

type EditHandlerProps = Pick<
  BudgetsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Budget;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  BudgetsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  BudgetsHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type OpenChangeSendEmailDialogHandlerProps = Pick<
  BudgetsHandlersProps,
  "setOpenSendEmailDialog"
> & {
  open: boolean;
};

type OpenChangeSignatureDialogHandlerProps = Pick<
  BudgetsHandlersProps,
  "setOpenSignatureDialog"
> & {
  open: boolean;
};

type OpenSignHandlerProps = Pick<
  BudgetsHandlersProps,
  "setOpenSignatureDialog" | "setSelectedRow"
> & {
  row: Budget;
};

type PreviewPDFHandlerProps = {
  row: Budget;
  type: "budget" | "invoice" | "deliveryNote" | "orderConfirmation";
};

type SendEmailHandlerProps = {
  row: Budget;
  type: "budget" | "invoice" | "deliveryNote" | "orderConfirmation";
  setOpenSendEmailDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Budget | null>>;
  setSendEmails: Dispatch<
    SetStateAction<Array<{ label: string; value: string }>>
  >;
};

type SignHandlerProps = Pick<
  BudgetsHandlersProps,
  | "selectedRow"
  | "signatureRef"
  | "setOpenSignatureDialog"
  | "setSignLoading"
  | "setData"
>;

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  BudgetsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  BudgetsHandlersProps,
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
  BudgetsHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: BudgetSchema;
};

type SubmitEmailHandlerProps = Pick<
  BudgetsHandlersProps,
  | "selectedRow"
  | "sendEmailForm"
  | "setSendEmails"
  | "setSelectedRow"
  | "setOpenSendEmailDialog"
  | "setEmailLoading"
> & {
  values: SendEmailSchema;
};

export type {
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
};
