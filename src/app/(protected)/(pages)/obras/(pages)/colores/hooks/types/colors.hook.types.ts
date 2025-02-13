// Types
import type { UseFormReturn } from "react-hook-form";
import type { Color } from "../../types/colors.container.types";
import type { ColorSchema } from "../../schemas/types/color.schema.types";
import type { ColorsHandlersReturn } from "../../handlers/types/colors.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/colors.hook.utils.types";

type ColorsHookProps = {
  initialData: Color[];
};

type ColorsHookReturn = Omit<
  ColorsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Color>;
  data: Color[];
  form: UseFormReturn<ColorSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Color>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Color | null;
  selectedRows: Color[];
};

export type { ColorsHookProps, ColorsHookReturn };
