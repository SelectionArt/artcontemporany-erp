"use client";
// Vendors
import { flexRender } from "@tanstack/react-table";
// Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Spinner } from "@/components/ui/spinner";
// Hooks
import { useBody } from "./hooks/use-body/use-body.hook";
// Utils
import { cn } from "@/lib/utils";
// Types
import type { BodyProps } from "./types/body.component.types";

const Body = <TData,>({ isError, isLoading, table }: BodyProps<TData>) => {
  const {
    columns,
    headerGroups,
    rows,
    showError,
    showLoading = true,
    showNoResults,
    showResults,
    t,
  } = useBody({ isError, isLoading, table });

  return (
    <div className="flex min-h-0 grow overflow-hidden rounded-md border *:data-[slot=table-container]:grow *:data-[slot=table-container]:overflow-auto">
      <Table
        className={cn((showLoading || showError || showNoResults) && "h-full")}
      >
        <TableHeader className="bg-background sticky top-0 z-10">
          {headerGroups.map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {!header.isPlaceholder &&
                    flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {showLoading && (
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={columns.length} className="text-center">
                <Spinner className="mx-auto" />
              </TableCell>
            </TableRow>
          )}
          {showError && (
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={columns.length} className="text-center">
                {t("error")}
              </TableCell>
            </TableRow>
          )}
          {showNoResults && (
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={columns.length} className="text-center">
                {t("noResults")}
              </TableCell>
            </TableRow>
          )}
          {showResults &&
            rows.map((row) => (
              <TableRow
                key={row.id}
                className="h-13"
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    <span className="line-clamp-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export { Body };
