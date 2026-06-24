// Components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// Constants
import { PAGE_SIZE_OPTIONS } from "./constants/rows-per-page.constants";
// Hooks
import { useRowsPerPage } from "./hooks/use-rows-per-page/use-rows-per-page.hook";
// Types
import type { RowsPerPageProps } from "./types/rows-per-page.component.types";

const RowsPerPage = <TData,>({
  pageSizeOptions = PAGE_SIZE_OPTIONS,
  table,
}: RowsPerPageProps<TData>) => {
  const { handleValueChange, pageSize, t } = useRowsPerPage({ table });

  return (
    <div className="flex items-center space-x-2">
      <p className="hidden text-sm font-medium sm:flex">{t("rowsPerPage")}</p>
      <Select value={pageSize} onValueChange={handleValueChange}>
        <SelectTrigger className="h-8 w-16">
          <SelectValue placeholder={pageSize} />
        </SelectTrigger>
        <SelectContent side="top">
          {pageSizeOptions.map((size) => (
            <SelectItem key={size} value={String(size)}>
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export { RowsPerPage };
