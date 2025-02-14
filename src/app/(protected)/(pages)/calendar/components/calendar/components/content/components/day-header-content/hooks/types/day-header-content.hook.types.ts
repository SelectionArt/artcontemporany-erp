// Types
import type { DayHeaderContentArg } from "@fullcalendar/core";

type DayHeaderContentHookProps = {
  arg: DayHeaderContentArg;
};

type DayHeaderContentHookReturn = {
  handleTimeGridDayButtonClick: () => void;
  handleTimeGridWeekButtonClick: () => void;
};

export type { DayHeaderContentHookProps, DayHeaderContentHookReturn };
