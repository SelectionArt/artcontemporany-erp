// Types
import type {
  ColumnSorterHandlersProps,
  ColumnSorterHandlersReturn,
  HandleHideProps,
  HandleSortAscProps,
  HandleSortDescProps,
} from "./types/column-sorter.handlers.types";

const handleHide = <TData>({ column }: HandleHideProps<TData>) => {
  column.toggleVisibility(false);
};

const handleSortAsc = <TData>({ column }: HandleSortAscProps<TData>) => {
  column.toggleSorting(false);
};

const handleSortDesc = <TData>({ column }: HandleSortDescProps<TData>) => {
  column.toggleSorting(true);
};

const ColumnSorterHandlers = <TData>({
  column,
}: ColumnSorterHandlersProps<TData>): ColumnSorterHandlersReturn => {
  return {
    handleHide: () => handleHide({ column }),
    handleSortAsc: () => handleSortAsc({ column }),
    handleSortDesc: () => handleSortDesc({ column }),
  };
};

export { ColumnSorterHandlers };
