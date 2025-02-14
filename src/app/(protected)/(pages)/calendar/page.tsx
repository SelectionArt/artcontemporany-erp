// Vendors
import type { Metadata } from "next";
// Components
import { Calendar } from "./components/calendar/calendar.component";
// Styles
import "./styles.css";

export const metadata: Metadata = {
  title: "Calendar",
  description: "Calendar page",
};

const CalendarPage = () => {
  return <Calendar />;
};

export default CalendarPage;
