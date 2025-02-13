// Vendors
import type { Table } from "@tanstack/react-table";
import type { MultipleSelectActionsProps } from "@/components/data-table/components/footer/components/multiple-select-actions/types/multiple-select-actions.component.types";

type FooterProps<TData> = {
  multipleSelectActionsProps: Pick<
    MultipleSelectActionsProps<TData>,
    "actions" | "button"
  >;
  table: Table<TData>;
};

export type { FooterProps };
