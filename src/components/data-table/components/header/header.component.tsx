// Components
import { CreateRecord } from "./components/create-record/create-record.component";
import { GlobalFilter } from "./components/global-filter/global-filter.component";
import { ColumnsVisibility } from "./components/columns-visibility/columns-visibility.component";
// Types
import type { HeaderProps } from "./types/header.component.types";

function Header<TData>({
  globalFilter,
  onCreateRecord,
  setGlobalFilter,
  table,
}: HeaderProps<TData>) {
  return (
    <div className="flex items-center gap-4 shrink-0">
      <GlobalFilter {...{ globalFilter, setGlobalFilter }} />
      <CreateRecord {...{ onCreateRecord }} />
      <ColumnsVisibility {...{ table }} />
    </div>
  );
}

export { Header };
