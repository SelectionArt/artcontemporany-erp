"use client";
// Vendors
import { useState } from "react";
import {
  ColumnFiltersState,
  FilterFn,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  RowSelectionState,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import type {
  DataTableHookProps,
  DataTableHookReturn,
} from "./types/data-table.hook.types";

const DataTableHook = <TData, TValue>({
  columns,
  data,
  initialColumnVisibility,
}: DataTableHookProps<TData, TValue>): DataTableHookReturn<TData> => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
    initialColumnVisibility,
  );
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [sorting, setSorting] = useState<SortingState>([]);

  const normalizeText = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const customGlobalFilter: FilterFn<TData> = (row, columnId, filterValue) => {
    const raw = row.getValue(columnId);
    const cellValue =
      typeof raw === "object" && raw !== null
        ? JSON.stringify(raw)
        : String(raw);

    return normalizeText(cellValue).includes(normalizeText(filterValue));
  };

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getRowId: (row) => (row as { id: string }).id,
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
    globalFilterFn: customGlobalFilter,
  });

  return {
    globalFilter,
    setGlobalFilter,
    table,
  };
};

export default DataTableHook;
