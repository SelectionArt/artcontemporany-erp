"use client";
// Components
import { Content } from "./components/content/content.component";
import { CreateDialog } from "./components/create-dialog/create-dialog.component";
import { Header } from "./components/header/header.component";
// Hooks
import { CalendarHook } from "./hooks/calendar.hook";

const Calendar = () => {
  const {
    calendarRef,
    createEventForm,
    datesState,
    openCreateDialog,
    setDatesState,
    setOpenCreateDialog,
  } = CalendarHook();

  return (
    <div className="flex flex-1 flex-col">
      <Header {...{ calendarRef, datesState }} />

      <div className="flex-1">
        <Content
          {...{
            calendarRef,
            createEventForm,
            setDatesState,
            setOpenCreateDialog,
          }}
        />
      </div>

      <CreateDialog
        {...{
          form: createEventForm,
          open: openCreateDialog,
          setOpen: setOpenCreateDialog,
        }}
      />
    </div>
  );
};

export { Calendar };
