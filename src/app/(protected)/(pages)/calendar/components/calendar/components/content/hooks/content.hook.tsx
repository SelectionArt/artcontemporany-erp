// Handlers
import { ContentHandlers } from "../handlers/content.handlers";
// Types
import type {
  ContentHookProps,
  ContentHookReturn,
} from "./types/content.hook.types";

const ContentHook = ({
  createEventForm,
  setDatesState,
  setOpenCreateDialog,
}: ContentHookProps): ContentHookReturn => {
  const { handleDatesSet, handleDateSelect } = ContentHandlers({
    createEventForm,
    setDatesState,
    setOpenCreateDialog,
  });

  return {
    handleDatesSet,
    handleDateSelect,
  };
};

export { ContentHook };
