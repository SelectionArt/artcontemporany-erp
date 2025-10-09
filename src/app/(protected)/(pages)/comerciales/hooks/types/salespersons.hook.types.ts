// Types
import type { UseFormReturn } from "react-hook-form";
import type { Salesperson } from "../../types/salespersons.container.types";
import type { SalespersonSchema } from "../../schemas/types/salesperson.schema.types";
import type { SalespersonsHandlersReturn } from "../../handlers/types/salespersons.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/salespersons.hook.utils.types";

type SalespersonsHookProps = {
  initialData: Salesperson[];
};

type SalespersonsHookReturn = Omit<
  SalespersonsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Salesperson>;
  data: Salesperson[];
  form: UseFormReturn<SalespersonSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Salesperson>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Salesperson | null;
  selectedRows: Salesperson[];
};

export type { SalespersonsHookProps, SalespersonsHookReturn };
