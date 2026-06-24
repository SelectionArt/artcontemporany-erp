// Vendors
import { useTranslations } from "next-intl";
// Handlers
import { GlobalFilterHandlers } from "../../handlers/global-filter.handlers";
// Types
import type { UseGlobalFilterProps } from "./types/use-global-filter.hook.types";

const useGlobalFilter = ({ onChange }: UseGlobalFilterProps) => {
  const t = useTranslations(
    "root.components.dataTable.components.header.components.globalFilter",
  );
  const { handleChange } = GlobalFilterHandlers({ onChange });

  return {
    handleChange,
    t,
  };
};

export { useGlobalFilter };
