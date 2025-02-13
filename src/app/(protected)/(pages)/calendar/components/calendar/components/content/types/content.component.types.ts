// Vendors
import type { CreateEventSchema } from "@/app/(protected)/(pages)/calendar/components/calendar/schemas/types/event.schema.types";
import type { DatesSetArg } from "@fullcalendar/core";
import type { Dispatch, SetStateAction } from "react";
import type { RefObject } from "react";
import type { UseFormReturn } from "react-hook-form";
import type FullCalendar from "@fullcalendar/react";

type ContentProps = {
  calendarRef: RefObject<FullCalendar | null>;
  createEventForm: UseFormReturn<CreateEventSchema>;
  setDatesState: Dispatch<SetStateAction<DatesSetArg | null>>;
  setOpenCreateDialog: Dispatch<SetStateAction<boolean>>;
};

export type { ContentProps };
