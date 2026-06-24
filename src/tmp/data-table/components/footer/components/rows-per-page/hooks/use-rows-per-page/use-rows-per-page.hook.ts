// Vendors
import { useTranslations } from "next-intl";
// Types
import type { UseRowsPerPageProps } from "./types/use-rows-per-page.hook.types";
// Handlers
import { RowsPerPageHandlers } from "../../handlers/rows-per-page.handlers";

const useRowsPerPage = <TData>({ table }: UseRowsPerPageProps<TData>) => {
  const t = useTranslations(
    "root.components.dataTable.components.footer.components.rowsPerPage",
  );

  const pageSize = table.getState().pagination.pageSize.toString();

  const { handleValueChange } = RowsPerPageHandlers<TData>({ table });

  return {
    handleValueChange,
    pageSize,
    t,
  };
};

export { useRowsPerPage };
