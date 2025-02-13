// Vendors
import { DatesSetArg } from "@fullcalendar/core";
import type { RefObject } from "react";
import type FullCalendar from "@fullcalendar/react";

type HeaderProps = {
  calendarRef: RefObject<FullCalendar | null>;
  datesState: DatesSetArg | null;
};

export type { HeaderProps };
