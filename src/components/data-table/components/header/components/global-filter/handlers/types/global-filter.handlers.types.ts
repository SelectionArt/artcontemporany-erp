// Vendors
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

type ChangeHandlerProps = Pick<GlobalFilterHandlersProps, "setGlobalFilter"> & {
  event: ChangeEvent<HTMLInputElement>;
};

type GlobalFilterHandlersProps = {
  setGlobalFilter: Dispatch<SetStateAction<string>>;
};

type GlobalFilterHandlersReturn = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type {
  ChangeHandlerProps,
  GlobalFilterHandlersProps,
  GlobalFilterHandlersReturn,
};
