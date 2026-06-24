// Types
import type { ColumnSorterHandlersReturn } from "@/components/data-table/components/header/components/column-sorter/handlers/types/column-sorter.handlers.types";
import type { Column } from "@tanstack/react-table";
import type { _Translator } from "use-intl";

type UseColumnSorterProps<TData> = {
  column: Column<TData>;
};

type UseColumnSorterReturn = ColumnSorterHandlersReturn & {
  canSort: boolean;
  isSorted: false | "asc" | "desc";
  t: _Translator;
};

export type { UseColumnSorterProps, UseColumnSorterReturn };
