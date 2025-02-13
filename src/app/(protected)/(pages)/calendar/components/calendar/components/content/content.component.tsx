"use client";

// Vendors
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
// Components
import { AllDayContent } from "./components/all-day-content/all-day-content.component";
import { DayCellContent } from "./components/day-cell-content/day-cell-content.component";
import { DayHeaderContent } from "./components/day-header-content/day-header-content.component";
// Constants
import constants from "./constants/content.constants";
// Hooks
import { ContentHook } from "./hooks/content.hook";
// Types
import type { ContentProps } from "./types/content.component.types";

const events = [
  {
    title: "All day event",
    start: "2025-01-01",
    end: "2025-01-02",
  },
  {
    title: "Long event",
    start: "2025-01-07",
    end: "2025-01-10",
  },
  {
    groupId: "999",
    title: "Repeating event",
    start: "2025-01-09T16:00:00",
  },
  {
    groupId: "999",
    title: "Repeating event",
    start: "2025-01-16T16:00:00",
  },
  {
    title: "Conference",
    start: "2025-01-11",
    end: "2025-01-13",
  },
  {
    title: "Meeting",
    start: "2025-01-12T10:30:00",
    end: "2025-01-12T12:30:00",
  },
  {
    title: "Lunch",
    start: "2025-01-12T12:00:00",
  },
  {
    title: "Meeting",
    start: "2025-01-12T14:30:00",
  },
  {
    title: "Happy Hour",
    start: "2025-01-12T17:30:00",
  },
  {
    title: "Dinner",
    start: "2025-01-12T20:00:00",
  },
  {
    title: "Birthday Party",
    start: "2025-01-13T07:00:00",
  },
  {
    title: "Click for Google",
    url: "http://google.com/",
    start: "2025-01-28",
  },
];

const Content = ({
  calendarRef,
  createEventForm,
  setDatesState,
  setOpenCreateDialog,
}: ContentProps) => {
  const { handleDatesSet, handleDateSelect } = ContentHook({
    createEventForm,
    setDatesState,
    setOpenCreateDialog,
  });

  return (
    <FullCalendar
      {...{
        ...constants.FULLCALENDAR_PROPS,
        allDayContent: AllDayContent,
        datesSet: handleDatesSet,
        dayCellContent: DayCellContent,
        dayHeaderContent: DayHeaderContent,
        events: events,
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        ref: calendarRef,
        select: handleDateSelect,
      }}
    />
  );
};

export { Content };
