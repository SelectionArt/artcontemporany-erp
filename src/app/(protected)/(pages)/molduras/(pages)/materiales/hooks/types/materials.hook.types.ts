// Types
import type { UseFormReturn } from "react-hook-form";
import type { Material } from "../../types/materials.container.types";
import type { MaterialSchema } from "../../schemas/types/material.schema.types";
import type { MaterialsHandlersReturn } from "../../handlers/types/materials.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/materials.hook.utils.types";

type MaterialsHookProps = {
  initialData: Material[];
};

type MaterialsHookReturn = Omit<
  MaterialsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Material>;
  data: Material[];
  form: UseFormReturn<MaterialSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Material>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Material | null;
  selectedRows: Material[];
};

export type { MaterialsHookProps, MaterialsHookReturn };
