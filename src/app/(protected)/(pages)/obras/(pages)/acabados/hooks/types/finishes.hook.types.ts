// Types
import type { UseFormReturn } from "react-hook-form";
import type { Finish } from "../../types/finishes.container.types";
import type { FinishSchema } from "../../schemas/types/finish.schema.types";
import type { FinishesHandlersReturn } from "../../handlers/types/finishes.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/finishes.hook.utils.types";

type FinishesHookProps = {
  initialData: Finish[];
};

type FinishesHookReturn = Omit<
  FinishesHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Finish>;
  data: Finish[];
  form: UseFormReturn<FinishSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Finish>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Finish | null;
  selectedRows: Finish[];
};

export type { FinishesHookProps, FinishesHookReturn };
