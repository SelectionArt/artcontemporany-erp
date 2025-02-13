// Types
import type {
  GlobalFilterHookProps,
  GlobalFilterHookReturn,
} from "./types/global-filter.hook.types";
// Handlers
import { GlobalFilterHandlers } from "../handlers/global-filter.handlers";

const GlobalFilterHook = ({
  setGlobalFilter,
}: GlobalFilterHookProps): GlobalFilterHookReturn => {
  const { handleChange } = GlobalFilterHandlers({ setGlobalFilter });

  return {
    handleChange,
  };
};

export { GlobalFilterHook };
