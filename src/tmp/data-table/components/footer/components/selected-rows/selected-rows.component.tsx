"use client";
// Hooks
import { useSelectedRows } from "./hooks/use-selected-rows/use-selected-rows.hook";
// Types
import type { SelectedRowsProps } from "./types/selected-rows.component.types";

const SelectedRows = <TData,>({ table }: SelectedRowsProps<TData>) => {
  const { selectedRows, t } = useSelectedRows({ table });

  if (!selectedRows) {
    return null;
  }

  return (
    <div className="text-muted-foreground flex-1 text-sm">
      <span>{t("selectedRows", { count: selectedRows })}</span>
    </div>
  );
};

export { SelectedRows };
