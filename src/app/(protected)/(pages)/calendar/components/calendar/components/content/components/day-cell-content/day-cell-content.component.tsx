// Components
import { Button } from "@/components/ui/button";
// Constants
import constants from "./constants/day-cell-content.constants";
// Types
import type { DayCellContentArg } from "@fullcalendar/core";

const DayCellContent = (arg: DayCellContentArg) => {
  return (
    <Button {...constants.BUTTON_PROPS}>
      <span>{arg.dayNumberText}</span>
    </Button>
  );
};

export { DayCellContent };
