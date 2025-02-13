// Types
import type { UseFormReturn } from "react-hook-form";
import type { Support } from "../../types/supports.container.types";
import type { SupportSchema } from "../../schemas/types/support.schema.types";
import type { SupportsHandlersReturn } from "../../handlers/types/supports.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/supports.hook.utils.types";

type SupportsHookProps = {
  initialData: Support[];
};

type SupportsHookReturn = Omit<
  SupportsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Support>;
  data: Support[];
  form: UseFormReturn<SupportSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Support>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Support | null;
  selectedRows: Support[];
};

export type { SupportsHookProps, SupportsHookReturn };
