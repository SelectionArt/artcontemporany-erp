// Vendors
import type { CreateEventSchema } from "@/app/(protected)/(pages)/calendar/components/calendar/schemas/types/event.schema.types";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";

type CreateDialogProps = {
  form: UseFormReturn<CreateEventSchema>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export type { CreateDialogProps };
