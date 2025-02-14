// Vendors
import { RefObject } from "react";
import { create } from "zustand";
import FullCalendar from "@fullcalendar/react";

type CalendarStore = {
  calendarRef: RefObject<FullCalendar | null>;
  setCalendarRef: (ref: RefObject<FullCalendar | null>) => void;
};

const useCalendarStore = create<CalendarStore>((set) => ({
  calendarRef: { current: null },
  setCalendarRef: (ref) => set({ calendarRef: ref }),
}));

export { useCalendarStore };
