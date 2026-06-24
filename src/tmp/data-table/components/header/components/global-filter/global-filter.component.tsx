"use client";
// Components
import { Input } from "@/components/ui/input";
// Hooks
import { useGlobalFilter } from "./hooks/use-global-filter/use-global-filter.hook";
// Types
import type { GlobalFilterProps } from "./types/global-filter.component.types";

const GlobalFilter = ({ onChange, value }: GlobalFilterProps) => {
  const { handleChange, t } = useGlobalFilter({ onChange });

  return (
    <Input
      type="text"
      placeholder={t("filterPlaceholder")}
      value={value}
      onChange={handleChange}
    />
  );
};

export { GlobalFilter };
