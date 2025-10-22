// Types
import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import type { Budget } from "../../types/budgets.container.types";
import type {
  BudgetSchema,
  SendEmailSchema,
} from "../../schemas/types/budget.schema.types";
import type { BudgetsHandlersReturn } from "../../handlers/types/budgets.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/budgets.hook.utils.types";
import type SignatureCanvas from "react-signature-canvas";

type BudgetsHookProps = {
  budgets: Budget[];
  page: "budgets" | "orders";
};

type BudgetsHookReturn = Omit<
  BudgetsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleDownloadPDF"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
  | "handleOpenSign"
  | "handlePreviewPDF"
  | "handleSendEmail"
  | "handleStatusChange"
> & {
  columns: GetColumnsConfigReturn<Budget>;
  data: Budget[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
  form: UseFormReturn<BudgetSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Budget>;
  openAlert: boolean;
  openDialog: boolean;
  openSendEmailDialog: boolean;
  openSignatureDialog: boolean;
  selectedRow: Budget | null;
  selectedRows: Budget[];
  sendEmails: Array<{ label: string; value: string }>;
  sendEmailForm: UseFormReturn<SendEmailSchema>;
  signatureRef: React.RefObject<SignatureCanvas | null>;
  signLoading: boolean;
  emailLoading: boolean;
};

export type { BudgetsHookProps, BudgetsHookReturn };
