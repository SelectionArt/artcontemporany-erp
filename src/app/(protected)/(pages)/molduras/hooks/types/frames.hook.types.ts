// Types
import type { UseFormReturn } from "react-hook-form";
import type { Frame } from "../../types/frames.container.types";
import type { FrameSchema } from "../../schemas/types/frame.schema.types";
import type { FramesHandlersReturn } from "../../handlers/types/frames.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/frames.hook.utils.types";

type FramesHookProps = {
  initialData: Frame[];
};

type FramesHookReturn = Omit<
  FramesHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Frame>;
  data: Frame[];
  form: UseFormReturn<FrameSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Frame>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Frame | null;
  selectedRows: Frame[];
};

export type { FramesHookProps, FramesHookReturn };
