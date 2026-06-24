// Types
import type {
  GlobalFilterHandlersProps,
  GlobalFilterHandlersReturn,
  HandleChange,
} from "./types/global-filter.handlers.types";

const handleChange: HandleChange = ({ event, onChange }) => {
  onChange(event.target.value);
};

const GlobalFilterHandlers = ({
  onChange,
}: GlobalFilterHandlersProps): GlobalFilterHandlersReturn => {
  return {
    handleChange: (event) => handleChange({ event, onChange }),
  };
};

export { GlobalFilterHandlers };
