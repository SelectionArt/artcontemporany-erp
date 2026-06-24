"use client";
// Components
import { Body } from "./components/body/body.component";
import { Footer } from "./components/footer/footer.component";
import { Header } from "./components/header/header.component";
// Types
import type { DataTableProps } from "./types/data-table.component.types";

const DataTable = <TData,>({
  createRecord,
  filters,
  headerActions,
  isError,
  isLoading,
  multipleSelectActions,
  table,
}: DataTableProps<TData>) => {
  return (
    <div className="flex min-h-0 grow flex-col gap-4">
      <Header
        actions={headerActions}
        createRecord={createRecord}
        filters={filters}
        onGlobalFilterChange={(value) => table.setGlobalFilter(value)}
        table={table}
      />
      <Body isError={isError} isLoading={isLoading} table={table} />
      <Footer multipleSelectActions={multipleSelectActions} table={table} />
    </div>
  );
};

export { DataTable };
