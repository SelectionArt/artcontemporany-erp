// Types
import type { UseFormReturn } from "react-hook-form";
import type { Manufacturer } from "../../types/manufacturers.container.types";
import type { ManufacturerSchema } from "../../schemas/types/manufacturer.schema.types";
import type { ManufacturersHandlersReturn } from "../../handlers/types/manufacturers.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/manufacturers.hook.utils.types";

type ManufacturersHookProps = {
  initialData: Manufacturer[];
};

type ManufacturersHookReturn = Omit<
  ManufacturersHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Manufacturer>;
  data: Manufacturer[];
  form: UseFormReturn<ManufacturerSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Manufacturer>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Manufacturer | null;
  selectedRows: Manufacturer[];
};

export type { ManufacturersHookProps, ManufacturersHookReturn };
