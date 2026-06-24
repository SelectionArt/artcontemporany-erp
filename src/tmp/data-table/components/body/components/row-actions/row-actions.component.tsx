// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Icons
import { Ellipsis } from "lucide-react";
// Types
import type { RowActionsProps } from "./types/row-actions.component.types";

const RowActions = <TData,>({
  actions,
  button,
  row,
  visible = true,
}: RowActionsProps<TData>) => {
  const visibleActions = actions.filter((a) => a.visible !== false);

  if (!visible || !visibleActions.length) return null;
  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button size="icon" variant="ghost" aria-label={button.ariaLabel} />
          }
        >
          {button.icon ? <button.icon /> : <Ellipsis />}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-auto">
          {visibleActions.map(({ icon: Icon, label, onClick }, index) => (
            <DropdownMenuItem key={index} onClick={() => onClick(row.original)}>
              {Icon && <Icon />}
              <span>{label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export { RowActions };
