// Types
import type { DayHeaderContentArg } from "@fullcalendar/core";

type DayHeaderContentHandlersProps = {
  arg: DayHeaderContentArg;
};

type DayHeaderContentHandlersReturn = {
  handleTimeGridDayButtonClick: () => void;
  handleTimeGridWeekButtonClick: () => void;
};

type ButtonClickHandlerProps = DayHeaderContentHandlersProps;

export type {
  DayHeaderContentHandlersProps,
  DayHeaderContentHandlersReturn,
  ButtonClickHandlerProps,
};
