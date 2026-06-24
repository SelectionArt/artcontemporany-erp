"use client";
// Components
import { Button } from "@/components/ui/button";
import { FacetedFilter } from "../faceted-filter/faceted-filter.component";
// Hooks
import { useFilters } from "./hooks/use-filters/use-filters.hook";
// Icons
import { X } from "lucide-react";
// Types
import type { FiltersProps } from "./types/filters.component.types";

const Filters = <TData,>({ filters, table }: FiltersProps<TData>) => {
  const { hasActiveFilters, t } = useFilters({ table });

  return (
    <div className="flex shrink-0 items-center gap-2">
      {filters.map((filter) => {
        const column = table.getColumn(filter.columnId);
        return column ? (
          <FacetedFilter
            key={filter.columnId}
            column={column}
            options={filter.options}
            title={filter.title}
          />
        ) : null;
      })}
      {hasActiveFilters && (
        <Button
          size="sm"
          variant="ghost"
          onClick={() => table.resetColumnFilters()}
        >
          {t("clearFilters")}
          <X className="ml-2 size-4" />
        </Button>
      )}
    </div>
  );
};

export { Filters };
