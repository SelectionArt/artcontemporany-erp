// Vendors
import { useTranslations } from "next-intl";
import type { Table } from "@tanstack/react-table";

type UseHeaderProps<TData> = {
  table: Table<TData>;
};

const useHeader = <TData>({ table }: UseHeaderProps<TData>) => {
  const t = useTranslations("root.components.dataTable.components.header");
  const globalFilter = String(table.getState().globalFilter ?? "");

  return { globalFilter, t };
};

export { useHeader };
