"use client";
// Vendors
import { useState } from "react";
import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
// Types
import type {
  ColumnFiltersState,
  RowSelectionState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import type { UseDataTableProps } from "./types/use-data-table.hook.types";

const useDataTable = <TData, TValue>({
  columns,
  data,
  getRowId,
  initialColumnVisibility,
}: UseDataTableProps<TData, TValue>) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
    initialColumnVisibility,
  );
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
      columns,
      data,
      enableRowSelection: true,
      getCoreRowModel: getCoreRowModel(),
      getFacetedRowModel: getFacetedRowModel(),
      getFacetedUniqueValues: getFacetedUniqueValues(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getRowId,
      getSortedRowModel: getSortedRowModel(),
      onColumnFiltersChange: setColumnFilters,
      onColumnVisibilityChange: setColumnVisibility,
      onGlobalFilterChange: setGlobalFilter,
      onRowSelectionChange: setRowSelection,
      onSortingChange: setSorting,
      state: {
        columnFilters,
        columnVisibility,
        globalFilter,
        rowSelection,
        sorting,
      },
      autoResetPageIndex: false,
  });

  return {
    table,
  };
};

export { useDataTable };
