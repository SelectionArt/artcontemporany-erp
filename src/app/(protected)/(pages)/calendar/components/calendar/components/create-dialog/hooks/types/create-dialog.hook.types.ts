// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { EventSchema } from "@/app/(protected)/(pages)/calendar/components/calendar/schemas/types/event.schema.types";
import type { UseFormReturn } from "react-hook-form";

type CreateDialogHookProps = {
  form: UseFormReturn<EventSchema>;
};

type CreateDialogHookReturn = {
  alert: AlertFormProps | null;
  handleSubmit: (values: EventSchema) => void;
  loading: boolean;
};

export type { CreateDialogHookProps, CreateDialogHookReturn };
