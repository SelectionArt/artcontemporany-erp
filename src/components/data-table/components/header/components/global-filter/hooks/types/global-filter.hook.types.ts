// Vendors
import type { Dispatch, SetStateAction } from "react";
// Types
import type { GlobalFilterHandlersReturn } from "../../handlers/types/global-filter.handlers.types";

type GlobalFilterHookProps = {
  setGlobalFilter: Dispatch<SetStateAction<string>>;
};

type GlobalFilterHookReturn = GlobalFilterHandlersReturn;

export type { GlobalFilterHookProps, GlobalFilterHookReturn };
