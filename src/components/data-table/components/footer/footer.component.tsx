// Components
import { MultipleSelectActions } from "./components/multiple-select-actions/multiple-select-actions.component";
import { PageIndicator } from "./components/page-indicator/page-indicator.component";
import { Pagination } from "./components/pagination/pagination.component";
import { RowsPerPage } from "./components/rows-per-page/rows-per-page.component";
import { SelectedRows } from "./components/selected-rows/selected-rows.component";
// Types
import type { FooterProps } from "./types/footer.component.types";

function Footer<TData>({
  multipleSelectActionsProps,
  table,
}: FooterProps<TData>) {
  return (
    <div className="flex shrink-0 items-center justify-between gap-4 lg:gap-6">
      <div className="flex items-center gap-4 lg:gap-6">
        <SelectedRows {...{ table }} />
        <MultipleSelectActions {...{ ...multipleSelectActionsProps, table }} />
      </div>
      <div className="ml-auto flex items-center gap-4 lg:gap-6">
        <RowsPerPage {...{ table }} />
        <PageIndicator {...{ table }} />
        <Pagination {...{ table }} />
      </div>
    </div>
  );
}

export { Footer };
