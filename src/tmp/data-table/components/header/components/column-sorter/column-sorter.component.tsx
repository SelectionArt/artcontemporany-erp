"use client";
// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Hooks
import { useColumnSorter } from "./hooks/use-column-sorter/use-column-sorter.hook";
// Icons
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from "lucide-react";
// Libs
import { cn } from "@/lib/utils";
// Types
import type { ColumnSorterProps } from "./types/column-sorter.component.types";

const ColumnSorter = <TData,>({
  className,
  column,
  label,
}: ColumnSorterProps<TData>) => {
  const { canSort, isSorted, handleHide, handleSortAsc, handleSortDesc, t } =
    useColumnSorter({ column });

  if (!canSort) {
    return <div className={cn(className)}>{label}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="ghost"
              size="sm"
              className="data-popup-open:bg-accent -ml-3 h-8"
            />
          }
        >
          <span>{label}</span>
          {isSorted === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : isSorted === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : (
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={handleSortAsc}>
            <ArrowUp className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
            {t("sortAsc")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSortDesc}>
            <ArrowDown className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
            {t("sortDesc")}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleHide}>
            <EyeOff className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
            {t("hideColumn")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export { ColumnSorter };
