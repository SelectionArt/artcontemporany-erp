// Vendors
import type { CreateEventSchema } from "../../schemas/types/event.schema.types";
import type { DatesSetArg } from "@fullcalendar/core";
import type { Dispatch, SetStateAction } from "react";
import type { RefObject } from "react";
import type { UseFormReturn } from "react-hook-form";
import type FullCalendar from "@fullcalendar/react";

type CalendarHookReturn = {
  calendarRef: RefObject<FullCalendar | null>;
  createEventForm: UseFormReturn<CreateEventSchema>;
  datesState: DatesSetArg | null;
  openCreateDialog: boolean;
  setDatesState: Dispatch<SetStateAction<DatesSetArg | null>>;
  setOpenCreateDialog: Dispatch<SetStateAction<boolean>>;
};

export type { CalendarHookReturn };
