// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Constants
import constants from "./constants/row-actions.constants";
// Icons
import { Ellipsis } from "lucide-react";
// Types
import type { RowActionsProps } from "./types/row-actions.component.types";

function RowActions<TData>({ actions, button, row }: RowActionsProps<TData>) {
  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button {...constants.BUTTON_PROPS} aria-label={button.ariaLabel}>
            {button.icon ? <button.icon /> : <Ellipsis />}
            {button.label && <span>{button.label}</span>}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {actions.map(({ icon: Icon, label, onClick }, index) => (
            <DropdownMenuItem key={index} onClick={() => onClick(row.original)}>
              {Icon && <Icon />}
              <span>{label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export { RowActions };
