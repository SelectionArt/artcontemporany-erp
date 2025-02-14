// Handlers
import { DayHeaderContentHandlers } from "../handlers/day-header-content.handlers";
import type {
  DayHeaderContentHookProps,
  DayHeaderContentHookReturn,
} from "./types/day-header-content.hook.types";

const DayHeaderContentHook = ({
  arg,
}: DayHeaderContentHookProps): DayHeaderContentHookReturn => {
  const { handleTimeGridDayButtonClick, handleTimeGridWeekButtonClick } =
    DayHeaderContentHandlers({
      arg,
    });

  return {
    handleTimeGridDayButtonClick,
    handleTimeGridWeekButtonClick,
  };
};

export { DayHeaderContentHook };
