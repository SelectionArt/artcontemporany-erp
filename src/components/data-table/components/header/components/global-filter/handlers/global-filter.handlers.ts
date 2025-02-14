// Types
import type {
  GlobalFilterHandlersProps,
  GlobalFilterHandlersReturn,
  ChangeHandlerProps,
} from "./types/global-filter.handlers.types";

const changeHandler = ({
  event,
  setGlobalFilter,
}: ChangeHandlerProps): void => {
  setGlobalFilter(event.target.value);
};

const GlobalFilterHandlers = ({
  setGlobalFilter,
}: GlobalFilterHandlersProps): GlobalFilterHandlersReturn => {
  return {
    handleChange: (event) =>
      changeHandler({
        event,
        setGlobalFilter,
      }),
  };
};

export { GlobalFilterHandlers };
