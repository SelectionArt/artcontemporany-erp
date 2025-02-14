// Vendors
import type { CreateEventSchema } from "@/app/(protected)/(pages)/calendar/components/calendar/schemas/types/event.schema.types";
import type { DatesSetArg, DateSelectArg } from "@fullcalendar/core";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";

type ContentHandlersProps = {
  createEventForm: UseFormReturn<CreateEventSchema>;
  setDatesState: Dispatch<SetStateAction<DatesSetArg | null>>;
  setOpenCreateDialog: Dispatch<SetStateAction<boolean>>;
};

type ContentHandlersReturn = {
  handleDatesSet: (dateInfo: DatesSetArg) => void;
  handleDateSelect: (arg: DateSelectArg) => void;
};

type DataSetHandlerProps = Pick<ContentHandlersProps, "setDatesState"> & {
  dateInfo: DatesSetArg;
};

type DateSelectProps = Pick<
  ContentHandlersProps,
  "setOpenCreateDialog" | "createEventForm"
> & {
  arg: DateSelectArg;
};

export type {
  ContentHandlersProps,
  ContentHandlersReturn,
  DataSetHandlerProps,
  DateSelectProps,
};
