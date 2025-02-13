// Vendors
import { RefObject } from "react";
import FullCalendar from "@fullcalendar/react";

type HeaderHandlersProps = {
  calendarRef: RefObject<FullCalendar | null>;
};

type HeaderHandlersReturn = {
  handleNextButtonClick: () => void;
  handlePrevButtonClick: () => void;
  handleTodayButtonClick: () => void;
  handleViewChange: (value: string) => void;
};

type NextButtonClickHandlerProps = HeaderHandlersProps;
type PrevButtonClickHandlerProps = HeaderHandlersProps;
type TodayButtonClickHandlerProps = HeaderHandlersProps;
type ViewChangeHandlerProps = HeaderHandlersProps & { value: string };

export type {
  HeaderHandlersProps,
  HeaderHandlersReturn,
  NextButtonClickHandlerProps,
  PrevButtonClickHandlerProps,
  TodayButtonClickHandlerProps,
  ViewChangeHandlerProps,
};
