// Types
import type { ChangeEvent } from "react";

type GlobalFilterHandlersProps = {
  onChange: (value: string) => void;
};

type HandleChange = (props: {
  event: ChangeEvent<HTMLInputElement>;
  onChange: (value: string) => void;
}) => void;

type GlobalFilterHandlersReturn = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type {
  GlobalFilterHandlersProps,
  GlobalFilterHandlersReturn,
  HandleChange,
};
