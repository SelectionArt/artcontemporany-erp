// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Constants
import constants from "./constants/multiple-select-actions.constants";
// Hooks
import { MultipleSelectActionsHook } from "./hooks/multiple-select-actions.hook";
// Icons
import { Ellipsis } from "lucide-react";
// Types
import type { MultipleSelectActionsProps } from "./types/multiple-select-actions.component.types";

function MultipleSelectActions<TData>({
  actions,
  button,
  table,
}: MultipleSelectActionsProps<TData>) {
  const { selectedRows } = MultipleSelectActionsHook({ table });

  if (!selectedRows.length) {
    return null;
  }

  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button {...constants.BUTTON_PROPS} aria-label={button.ariaLabel}>
            {button.icon ? (
              <button.icon className="h-4 w-4" />
            ) : (
              <Ellipsis className="h-4 w-4" />
            )}
            {button.label && <span>{button.label}</span>}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {actions.map(({ icon: Icon, label, onClick }, index) => (
            <DropdownMenuItem key={index} onClick={() => onClick(selectedRows)}>
              {Icon && <Icon className="h-4 w-4" />}
              <span>{label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export { MultipleSelectActions };
