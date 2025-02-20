"use client";
// Components
import { Body } from "./components/body/body.component";
import { Footer } from "./components/footer/footer.component";
import { Header } from "./components/header/header.component";
// Hooks
import DataTableHook from "./hooks/data-table.hook";
// Types
import type { DataTableProps } from "./types/data-table.component.types";

function DataTable<TData>({
  columns,
  data,
  headerActions,
  initialColumnVisibility,
  multipleSelectActionsProps,
  onCreateRecord,
}: DataTableProps<TData>) {
  const { globalFilter, setGlobalFilter, table } = DataTableHook({
    columns,
    initialColumnVisibility,
    data,
  });

  return (
    <div className="flex h-full w-full grow flex-col gap-4">
      <Header
        {...{
          actions: headerActions,
          globalFilter,
          onCreateRecord,
          setGlobalFilter,
          table,
        }}
      />
      <Body {...{ columns, table }} />
      <Footer {...{ multipleSelectActionsProps, table }} />
    </div>
  );
}

export { DataTable };
