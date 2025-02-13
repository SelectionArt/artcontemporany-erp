import type { Dispatch, SetStateAction } from "react";
import type { Table } from "@tanstack/react-table";

type HeaderProps<TData> = {
  globalFilter: string;
  onCreateRecord: () => void;
  setGlobalFilter: Dispatch<SetStateAction<string>>;
  table: Table<TData>;
};

export type { HeaderProps };
