// Types
import type { HeaderProps } from "./types/header.component.types";
// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// Constants
import constants from "./contants/header.constants";
// Hooks
import { HeaderHook } from "./hooks/header.hook";
// Icons
import {
  CalendarCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";

const Header = ({ calendarRef, datesState }: HeaderProps) => {
  const {
    handleNextButtonClick,
    handlePrevButtonClick,
    handleTodayButtonClick,
    handleViewChange,
  } = HeaderHook({
    calendarRef,
  });

  const view = datesState?.view.type as keyof typeof constants.VIEW_MAP;

  return (
    <div className="flex h-16 items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              {...constants.BUTTON_PROPS}
              aria-label={constants.LABELS.TOGGLE_SIDEBAR}
            >
              <Menu />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{constants.LABELS.TOGGLE_SIDEBAR}</p>
          </TooltipContent>
        </Tooltip>

        <div>{datesState?.view.title}</div>
      </div>

      <div className="flex">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              {...constants.BUTTON_PROPS}
              onClick={handlePrevButtonClick}
              aria-label={`${constants.LABELS.PREV} ${constants.VIEW_MAP[view]}`}
            >
              <ChevronLeft />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{`${constants.LABELS.PREV} ${constants.VIEW_MAP[view]}`}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              {...constants.BUTTON_PROPS}
              onClick={handleNextButtonClick}
              aria-label={`${constants.LABELS.NEXT} ${constants.VIEW_MAP[view]}`}
            >
              <ChevronRight />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{`${constants.LABELS.NEXT} ${constants.VIEW_MAP[view]}`}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              {...constants.BUTTON_PROPS}
              onClick={handleTodayButtonClick}
              aria-label={constants.LABELS.TODAY}
            >
              <CalendarCheck />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{constants.LABELS.TODAY}</p>
          </TooltipContent>
        </Tooltip>

        <DropdownMenu>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button {...constants.VIEW.BUTTON_PROPS}>
                  {
                    constants.VIEW.DROPDOWN.ITEMS.find(
                      ({ value }) => value === datesState?.view.type,
                    )?.label
                  }
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>{constants.LABELS.CHANGE_VIEW}</p>
            </TooltipContent>
          </Tooltip>
          <DropdownMenuContent {...constants.VIEW.DROPDOWN.CONTENT_PROPS}>
            {constants.VIEW.DROPDOWN.ITEMS.map(({ label, value }) => (
              <DropdownMenuItem
                key={value}
                onClick={() => handleViewChange(value)}
              >
                {label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export { Header };
