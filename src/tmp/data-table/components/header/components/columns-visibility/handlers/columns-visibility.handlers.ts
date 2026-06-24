// Types
import type {
  ColumnsVisibilityHandlersReturn,
  HandleCheckedChangeProps,
} from "./types/columns-visibility.handlers.types";

const handleCheckedChange = <TData>({
  column,
  value,
}: HandleCheckedChangeProps<TData>) => {
  column.toggleVisibility(!!value);
};

const ColumnsVisibilityHandlers = <
  TData,
>(): ColumnsVisibilityHandlersReturn<TData> => {
  return {
    handleCheckedChange: ({ column, value }) =>
      handleCheckedChange({ column, value }),
  };
};

export { ColumnsVisibilityHandlers };
