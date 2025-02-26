// Types
import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import type { Budget } from "../../types/budgets.container.types";
import type { BudgetSchema } from "../../schemas/types/budget.schema.types";
import type { BudgetsHandlersReturn } from "../../handlers/types/budgets.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/budgets.hook.utils.types";
import type SignatureCanvas from "react-signature-canvas";

type BudgetsHookProps = {
  budgets: Budget[];
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
> & {
  columns: GetColumnsConfigReturn<Budget>;
  data: Budget[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
  form: UseFormReturn<BudgetSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Budget>;
  openAlert: boolean;
  openDialog: boolean;
  openSignatureDialog: boolean;
  selectedRow: Budget | null;
  selectedRows: Budget[];
  signatureRef: React.RefObject<SignatureCanvas | null>;
  signLoading: boolean;
};

export type { BudgetsHookProps, BudgetsHookReturn };
