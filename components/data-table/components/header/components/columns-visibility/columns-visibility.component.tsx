// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
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
// Constants
import constants from "./constants/columns-visibility.constants";
// Hooks
import { ColumnsVisibilityHook } from "./hooks/columns-visibility.hook";
// Icons
import { SlidersHorizontal } from "lucide-react";
// Types
import type { ColumnsVisibilityProps } from "./types/columns-visibility.component.types";

function ColumnsVisibility<TData>({ table }: ColumnsVisibilityProps<TData>) {
  const { handleCheckedChange, hideableColumns } = ColumnsVisibilityHook({
    table,
  });
  return (
    <DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger {...constants.DROPDOWN_PROPS.TRIGGER_PROPS}>
              <Button {...constants.DROPDOWN_PROPS.BUTTON_PROPS}>
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>{constants.TOOLTIP_PROPS.CONTENT}</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent
        {...constants.DROPDOWN_PROPS.CONTENT_PROPS}
        className="w-[150px]"
      >
        <DropdownMenuLabel>{constants.DROPDOWN_PROPS.LABEL}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {hideableColumns.map((column) => (
          <DropdownMenuCheckboxItem
            key={column.id}
            className="capitalize"
            checked={column.getIsVisible()}
            onCheckedChange={(value) => handleCheckedChange({ column, value })}
          >
            {typeof column.columnDef.meta === "string"
              ? column.columnDef.meta
              : column.id}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { ColumnsVisibility };
