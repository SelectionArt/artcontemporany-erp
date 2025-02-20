// Types
import type { UseFormReturn } from "react-hook-form";
import type { Section } from "../../types/sections.container.types";
import type { SectionSchema } from "../../schemas/types/section.schema.types";
import type { SectionsHandlersReturn } from "../../handlers/types/sections.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/sections.hook.utils.types";

type SectionsHookProps = {
  initialData: Section[];
};

type SectionsHookReturn = Omit<
  SectionsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Section>;
  data: Section[];
  form: UseFormReturn<SectionSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Section>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Section | null;
  selectedRows: Section[];
};

export type { SectionsHookProps, SectionsHookReturn };
