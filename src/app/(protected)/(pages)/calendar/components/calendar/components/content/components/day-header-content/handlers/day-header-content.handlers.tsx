// Types
import type {
  DayHeaderContentHandlersProps,
  DayHeaderContentHandlersReturn,
  ButtonClickHandlerProps,
} from "./types/day-header-content.handlers.types";

const timeGridDayButtonClickHandler = ({
  arg,
}: ButtonClickHandlerProps): void => {
  arg.view.calendar.changeView("listDay", arg.date);
};

const timeGridWeekButtonClickHandler = ({
  arg,
}: ButtonClickHandlerProps): void => {
  arg.view.calendar.changeView("timeGridDay", arg.date);
};

const DayHeaderContentHandlers = ({
  arg,
}: DayHeaderContentHandlersProps): DayHeaderContentHandlersReturn => {
  return {
    handleTimeGridDayButtonClick: () => timeGridDayButtonClickHandler({ arg }),
    handleTimeGridWeekButtonClick: () =>
      timeGridWeekButtonClickHandler({ arg }),
  };
};

export { DayHeaderContentHandlers };
