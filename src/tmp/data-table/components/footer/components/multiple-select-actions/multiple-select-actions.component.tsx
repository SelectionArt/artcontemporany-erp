// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// Hooks
import { useMultipleSelectActions } from "./hooks/use-multiple-select-actions/use-multiple-select-actions.hook";
// Icons
import { Ellipsis } from "lucide-react";
// Types
import type { MultipleSelectActionsProps } from "./types/multiple-select-actions.component.types";

const MultipleSelectActions = <TData,>({
  multipleSelectActions: { actions, button },
  table,
}: MultipleSelectActionsProps<TData>) => {
  const { selectedRows } = useMultipleSelectActions({ table });

  const visibleActions = actions.filter((a) => a.visible !== false);

  if (!selectedRows.length || !visibleActions.length) {
    return null;
  }

  const tooltipLabel = button.label ?? button.ariaLabel;

  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              render={
                <DropdownMenuTrigger
                  render={
                    <Button
                      size="icon"
                      variant="outline"
                      aria-label={button.ariaLabel}
                    />
                  }
                />
              }
            >
              {button.icon ? <button.icon /> : <Ellipsis />}
            </TooltipTrigger>
            {tooltipLabel && <TooltipContent>{tooltipLabel}</TooltipContent>}
          </Tooltip>
        </TooltipProvider>
        <DropdownMenuContent align="end" className="w-auto">
          {visibleActions.map(({ icon: Icon, label, onClick }, index) => (
            <DropdownMenuItem key={index} onClick={() => onClick(selectedRows)}>
              {Icon && <Icon />}
              <span>{label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export { MultipleSelectActions };
