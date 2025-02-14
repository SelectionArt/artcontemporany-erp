// Vendors
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type HeaderHookProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

type HeaderHookReturn = {
  handleNextButtonClick: () => void;
  handlePrevButtonClick: () => void;
  handleTodayButtonClick: () => void;
  handleViewChange: (value: string) => void;
};

export type { HeaderHookProps, HeaderHookReturn };
