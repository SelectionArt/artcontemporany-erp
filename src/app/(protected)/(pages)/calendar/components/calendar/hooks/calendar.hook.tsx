// Vendors
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Schemas
import { eventSchema } from "../schemas/event.schema";
// Types
import type { CalendarHookReturn } from "./types/calendar.hook.types";
import type { EventSchema } from "../schemas/types/event.schema.types";
import type { DatesSetArg } from "@fullcalendar/core";
import type FullCalendar from "@fullcalendar/react";

const CalendarHook = (): CalendarHookReturn => {
  const [datesState, setDatesState] = useState<DatesSetArg | null>(null);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);

  const calendarRef = useRef<FullCalendar | null>(null);

  const createEventForm = useForm<EventSchema>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      start: "",
    },
  });

  return {
    calendarRef,
    createEventForm,
    datesState,
    openCreateDialog,
    setDatesState,
    setOpenCreateDialog,
  };
};

export { CalendarHook };
