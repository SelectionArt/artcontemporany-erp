"use client";
// Vendors
import { useState } from "react";
import {
  FilterFn,
  getCoreRowModel,
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
    const cellValue = row.getValue(columnId);
    if (typeof cellValue !== "string") return false;

    return normalizeText(cellValue).includes(normalizeText(filterValue));
  };

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getRowId: (row) => (row as { id: string }).id,
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    state: {
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
