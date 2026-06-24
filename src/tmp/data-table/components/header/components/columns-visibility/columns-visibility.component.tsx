"use client";
// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// Hooks
import { useColumnsVisibility } from "./hooks/use-columns-visibility/use-columns-visibility.hook";
// Icons
import { SlidersHorizontal } from "lucide-react";
// Types
import type { ColumnsVisibilityProps } from "./types/columns-visibility.component.types";

const ColumnsVisibility = <TData,>({
  table,
}: ColumnsVisibilityProps<TData>) => {
  const { handleCheckedChange, hideableColumns, t } = useColumnsVisibility({
    table,
  });

  return (
    <DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            render={
              <DropdownMenuTrigger
                render={<Button size="icon" variant="ghost" />}
              />
            }
          >
            <SlidersHorizontal className="h-4 w-4" />
          </TooltipTrigger>
          <TooltipContent>{t("columnsTooltip")}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent align="end" className="w-36">
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t("columnsLabel")}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {hideableColumns.map((column) => (
            <DropdownMenuCheckboxItem
              key={column.id}
              className="capitalize"
              checked={column.getIsVisible()}
              onCheckedChange={(value) =>
                handleCheckedChange({ column, value })
              }
            >
              {column.id}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ColumnsVisibility };
