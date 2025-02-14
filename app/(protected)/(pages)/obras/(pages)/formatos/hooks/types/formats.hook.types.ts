// Types
import type { UseFormReturn } from "react-hook-form";
import type { Format } from "../../types/formats.container.types";
import type { FormatSchema } from "../../schemas/types/format.schema.types";
import type { FormatsHandlersReturn } from "../../handlers/types/formats.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/formats.hook.utils.types";

type FormatsHookProps = {
  initialData: Format[];
};

type FormatsHookReturn = Omit<
  FormatsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Format>;
  data: Format[];
  form: UseFormReturn<FormatSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Format>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Format | null;
  selectedRows: Format[];
};

export type { FormatsHookProps, FormatsHookReturn };
