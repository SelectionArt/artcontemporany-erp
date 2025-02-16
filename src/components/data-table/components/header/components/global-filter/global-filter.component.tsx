// Components
import { Input } from "@/components/ui/input";
// Constants
import constants from "./constants/global-filter.constants";
// Hooks
import { GlobalFilterHook } from "./hooks/global-filter.hook";
// Types
import type { GlobalFilterProps } from "./types/global-filter.component.types";

const GlobalFilter = ({ globalFilter, setGlobalFilter }: GlobalFilterProps) => {
  const { handleChange } = GlobalFilterHook({ setGlobalFilter });

  return (
    <Input
      {...{
        ...constants.FIELD_INPUT_PROPS,
        value: globalFilter,
        onChange: handleChange,
      }}
    />
  );
};

export { GlobalFilter };
