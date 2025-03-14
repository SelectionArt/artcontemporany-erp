"use client";
// Vendors
import { useForm, useFieldArray } from "react-hook-form";
import { useRef, useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/budgets.constants";
// Handlers
import { BudgetsHandlers } from "../handlers/budgets.handlers";
// Schemas
import { budgetSchema, sendEmailSchema } from "../schemas/budget.schema";
// Types
import type { Budget } from "../types/budgets.container.types";
import type {
  BudgetSchema,
  SendEmailSchema,
} from "../schemas/types/budget.schema.types";
import type {
  BudgetsHookProps,
  BudgetsHookReturn,
} from "./types/budgets.hook.types";
import type SignatureCanvas from "react-signature-canvas";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/budgets.hook.utils";

const BudgetsHook = ({ budgets }: BudgetsHookProps): BudgetsHookReturn => {
  const [sendEmails, setSendEmails] = useState<
    Array<{ label: string; value: string }>
  >([]);
  const [data, setData] = useState<Budget[]>(budgets);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openSignatureDialog, setOpenSignatureDialog] =
    useState<boolean>(false);
  const [openSendEmailDialog, setOpenSendEmailDialog] =
    useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Budget | null>(null);
  const [selectedRows, setSelectedRows] = useState<Budget[]>([]);
  const [signLoading, setSignLoading] = useState<boolean>(false);
  const [emailLoading, setEmailLoading] = useState<boolean>(false);

  const form = useForm<BudgetSchema>({
    resolver: zodResolver(budgetSchema),
    defaultValues: constants.DEFAULT_FORM_VALUES,
  });

  const sendEmailForm = useForm<SendEmailSchema>({
    resolver: zodResolver(sendEmailSchema),
    defaultValues: constants.DEFAULT_SEND_EMAIL_FORM_VALUES,
  });

  const fieldArray = useFieldArray({
    control: form.control,
    name: "items",
  });

  const signatureRef = useRef<SignatureCanvas | null>(null);

  useEffect(() => {
    if (openSignatureDialog && selectedRow?.signature?.imageUrl) {
      const convertToBase64 = async (url: string) => {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });
      };

      convertToBase64(selectedRow.signature.imageUrl).then((base64) => {
        signatureRef.current?.fromDataURL(base64);
      });
    }
  }, [openSignatureDialog]);

  const {
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleDownloadPDF,
    handleEdit,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleOpenChangeSendEmailDialog,
    handleOpenChangeSignatureDialog,
    handleOpenSign,
    handlePreviewPDF,
    handleSendEmail,
    handleSign,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    handleSubmitEmail,
  } = BudgetsHandlers({
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
  });

  const columns = getColumnsConfig({
    handleDelete,
    handleDownloadPDF,
    handleEdit,
    handleOpenSign,
    handlePreviewPDF,
    handleSendEmail,
  });
  const multipleSelectActionsProps = getMultipleSelectActionsProps({
    handleDeleteMultiple,
  });

  return {
    columns,
    data,
    fieldArray,
    form,
    handleCreate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleOpenChangeSendEmailDialog,
    handleOpenChangeSignatureDialog,
    handleSign,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    handleSubmitEmail,
    loading,
    multipleSelectActionsProps,
    openAlert,
    openDialog,
    openSendEmailDialog,
    openSignatureDialog,
    selectedRow,
    selectedRows,
    sendEmails,
    sendEmailForm,
    signatureRef,
    signLoading,
    emailLoading, 
  };
};

export { BudgetsHook };
