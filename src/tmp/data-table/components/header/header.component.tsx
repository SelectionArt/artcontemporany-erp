"use client";
// Components
import { Button } from "@/components/ui/button";
import { ColumnsVisibility } from "./components/columns-visibility/columns-visibility.component";
import { CreateRecord } from "./components/create-record/create-record.component";
import { Filters } from "./components/filters/filters.component";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GlobalFilter } from "./components/global-filter/global-filter.component";
// Hooks
import { useHeader } from "./hooks/use-header/use-header.hook";
// Icons
import { Ellipsis } from "lucide-react";
// Types
import type { HeaderProps } from "./types/header.component.types";

const Header = <TData,>({
  actions = [],
  createRecord,
  filters,
  onGlobalFilterChange,
  table,
}: HeaderProps<TData>) => {
  const { globalFilter, t } = useHeader({ table });
  return (
    <div className="flex shrink-0 flex-col gap-4">
      <div className="flex items-center gap-4">
        <GlobalFilter value={globalFilter} onChange={onGlobalFilterChange} />
        <CreateRecord createRecord={createRecord} />
        <ColumnsVisibility table={table} />
        {actions.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button aria-label={t("actions")} size="icon" variant="ghost" />
              }
            >
              <Ellipsis className="h-4 w-4" />
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
      {filters && filters.length > 0 && (
        <Filters filters={filters} table={table} />
      )}
    </div>
  );
};

export { Header };
