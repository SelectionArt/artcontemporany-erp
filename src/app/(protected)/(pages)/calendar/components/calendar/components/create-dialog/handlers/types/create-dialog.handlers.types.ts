// Vendors
import { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { EventSchema } from "@/app/(protected)/(pages)/calendar/components/calendar/schemas/types/event.schema.types";

type CreateDialogHandlersProps = {
  form: UseFormReturn<EventSchema>;
  setAlert: Dispatch<SetStateAction<AlertFormProps | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

type CreateDialogHandlersReturn = {
  handleSubmit: (values: EventSchema) => void;
};

type SubmitHandlerProps = CreateDialogHandlersProps & {
  values: EventSchema;
};

export type {
  CreateDialogHandlersProps,
  CreateDialogHandlersReturn,
  SubmitHandlerProps,
};
