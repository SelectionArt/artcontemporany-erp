// Types
import type {
  HeaderHandlersProps,
  HeaderHandlersReturn,
  NextButtonClickHandlerProps,
  PrevButtonClickHandlerProps,
  TodayButtonClickHandlerProps,
  ViewChangeHandlerProps,
} from "./types/header.handlers.types";

const nextButtonClickHandler = ({
  calendarRef,
}: NextButtonClickHandlerProps): void => {
  const calendarApi = calendarRef.current?.getApi();
  calendarApi?.next();
};

const prevButtonClickHandler = ({
  calendarRef,
}: PrevButtonClickHandlerProps): void => {
  const calendarApi = calendarRef.current?.getApi();
  calendarApi?.prev();
};

const todayButtonClickHandler = ({
  calendarRef,
}: TodayButtonClickHandlerProps): void => {
  const calendarApi = calendarRef.current?.getApi();
  calendarApi?.today();
};

const viewChangeHandler = ({
  calendarRef,
  value,
}: ViewChangeHandlerProps): void => {
  const calendarApi = calendarRef.current?.getApi();
  calendarApi?.changeView(value);
};

const HeaderHandlers = ({
  calendarRef,
}: HeaderHandlersProps): HeaderHandlersReturn => {
  return {
    handleNextButtonClick: () => nextButtonClickHandler({ calendarRef }),
    handlePrevButtonClick: () => prevButtonClickHandler({ calendarRef }),
    handleTodayButtonClick: () => todayButtonClickHandler({ calendarRef }),
    handleViewChange: (value) => viewChangeHandler({ calendarRef, value }),
  };
};

export { HeaderHandlers };
