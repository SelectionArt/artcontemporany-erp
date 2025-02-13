// Types
import type {
  ContentHandlersProps,
  ContentHandlersReturn,
  DataSetHandlerProps,
  DateSelectProps,
} from "./types/content.handlers.types";

const datesSetHandler = ({
  dateInfo,
  setDatesState,
}: DataSetHandlerProps): void => {
  setDatesState(dateInfo);
};

const selectDateHandler = ({
  arg,
  createEventForm,
  setOpenCreateDialog,
}: DateSelectProps): void => {
  console.log(arg);
  createEventForm.setValue("start", arg.start);
  createEventForm.setValue("end", arg.end);
  createEventForm.setValue("allDay", arg.allDay);
  setOpenCreateDialog(true);
};

const ContentHandlers = ({
  createEventForm,
  setDatesState,
  setOpenCreateDialog,
}: ContentHandlersProps): ContentHandlersReturn => {
  return {
    handleDatesSet: (dateInfo) => datesSetHandler({ dateInfo, setDatesState }),
    handleDateSelect: (arg) =>
      selectDateHandler({ arg, createEventForm, setOpenCreateDialog }),
  };
};

export { ContentHandlers };
