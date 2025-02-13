// Types
import type { UseFormReturn } from "react-hook-form";
import type { Style } from "../../types/styles.container.types";
import type { StyleSchema } from "../../schemas/types/style.schema.types";
import type { StylesHandlersReturn } from "../../handlers/types/styles.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/styles.hook.utils.types";

type StylesHookProps = {
  initialData: Style[];
};

type StylesHookReturn = Omit<
  StylesHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Style>;
  data: Style[];
  form: UseFormReturn<StyleSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Style>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Style | null;
  selectedRows: Style[];
};

export type { StylesHookProps, StylesHookReturn };
