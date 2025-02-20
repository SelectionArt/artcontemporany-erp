// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreateRecord } from "./components/create-record/create-record.component";
import { GlobalFilter } from "./components/global-filter/global-filter.component";
import { ColumnsVisibility } from "./components/columns-visibility/columns-visibility.component";
// Constants
import constants from "./constants/header.constants";
// Icons
import { Ellipsis } from "lucide-react";
// Types
import type { HeaderProps } from "./types/header.component.types";

function Header<TData>({
  actions = [],
  globalFilter,
  onCreateRecord,
  setGlobalFilter,
  table,
}: HeaderProps<TData>) {
  return (
    <div className="flex shrink-0 items-center gap-4">
      <GlobalFilter {...{ globalFilter, setGlobalFilter }} />
      <CreateRecord {...{ onCreateRecord }} />
      <ColumnsVisibility {...{ table }} />
      {actions.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button {...constants.BUTTON_PROPS}>
              <Ellipsis className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {actions.map(({ icon: Icon, label, onClick }, index) => (
              <DropdownMenuItem key={index} onClick={onClick}>
                {Icon && <Icon className="h-4 w-4" />}
                <span>{label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}

export { Header };
