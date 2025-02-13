// Components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// Constants
import constants from "./constants/rows-per-page.constants";
// Hooks
import { RowsPerPageHook } from "./hooks/rows-per-page.hook";
// Types
import type { RowsPerPageProps } from "./types/rows-per-page.component.types";

function RowsPerPage<TData>({ table }: RowsPerPageProps<TData>) {
  const { handleValueChange, pageSize } = RowsPerPageHook({ table });

  return (
    <div className="flex items-center space-x-2">
      <p className="hidden text-sm font-medium sm:flex">{constants.LABEL}</p>
      <Select value={pageSize} onValueChange={handleValueChange}>
        <SelectTrigger className="h-8 w-[70px]">
          <SelectValue placeholder={pageSize} />
        </SelectTrigger>
        <SelectContent side="top">
          {constants.PAGE_SIZES.map((pageSize) => (
            <SelectItem key={pageSize} value={pageSize}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export { RowsPerPage };
