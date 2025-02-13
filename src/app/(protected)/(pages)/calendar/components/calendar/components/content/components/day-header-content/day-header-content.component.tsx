// Components
import { Button } from "@/components/ui/button";
// Constants
import constants from "./contants/day-header-content.constants";
// Hooks
import { DayHeaderContentHook } from "./hooks/day-header-content.hook";
// Types
import type { DayHeaderContentArg } from "@fullcalendar/core";

const DayHeaderContent = (arg: DayHeaderContentArg) => {
  const { handleTimeGridDayButtonClick, handleTimeGridWeekButtonClick } =
    DayHeaderContentHook({ arg });

  const weekday = arg.date.toLocaleString("en-US", { weekday: "short" });
  const day = arg.date.toLocaleString("en-US", { day: "numeric" });

  if (arg.view.type === "dayGridMonth") {
    return <div className="text-sm font-normal uppercase">{arg.text}</div>;
  }

  if (arg.view.type === "timeGridWeek") {
    return (
      <div className="flex flex-col items-center">
        <div className="text-ellipsis text-sm font-normal uppercase">
          {weekday}
        </div>
        <Button
          {...constants.BUTTON_PROPS}
          onClick={handleTimeGridWeekButtonClick}
        >
          {day}
        </Button>
      </div>
    );
  }

  if (arg.view.type === "timeGridDay") {
    return (
      <div className="flex flex-col items-center">
        <div className="text-sm font-normal uppercase">{weekday}</div>
        <Button
          {...constants.BUTTON_PROPS}
          onClick={handleTimeGridDayButtonClick}
        >
          {day}
        </Button>
      </div>
    );
  }

  if (arg.view.type === "listWeek" || arg.view.type === "listDay") {
    return (
      <div className="flex items-center gap-2 text-sm font-normal">
        <div className="uppercase">{arg.text}</div>
        <div>{day}</div>
      </div>
    );
  }

  return arg.text;
};

export { DayHeaderContent };
