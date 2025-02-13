// Types
import type {
  ColumnsVisibilityHandlersReturn,
  CheckedChangeHandlerProps,
} from "./types/columns-visibility.handlers.types";

const checkedChangeHandler = <TData>({
  value,
  column,
}: CheckedChangeHandlerProps<TData>): void => {
  column.toggleVisibility(!!value);
};

const ColumnsVisibilityHandlers = <
  TData,
>(): ColumnsVisibilityHandlersReturn<TData> => {
  return {
    handleCheckedChange: ({ column, value }) =>
      checkedChangeHandler({
        column,
        value,
      }),
  };
};

export { ColumnsVisibilityHandlers };
