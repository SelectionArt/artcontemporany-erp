// Handlers
import { HeaderHandlers } from "../handlers/header.handlers";
// Types
import type {
  HeaderHookProps,
  HeaderHookReturn,
} from "./types/header.hook.types";

const HeaderHook = ({ calendarRef }: HeaderHookProps): HeaderHookReturn => {
  const {
    handleNextButtonClick,
    handlePrevButtonClick,
    handleTodayButtonClick,
    handleViewChange,
  } = HeaderHandlers({
    calendarRef,
  });

  return {
    handleNextButtonClick,
    handlePrevButtonClick,
    handleTodayButtonClick,
    handleViewChange,
  };
};

export { HeaderHook };
