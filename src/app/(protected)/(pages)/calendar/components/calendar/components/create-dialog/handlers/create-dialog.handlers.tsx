// Actions
// import { resetAction } from "../actions/reset.action";
// Types
import type {
  CreateDialogHandlersProps,
  CreateDialogHandlersReturn,
  SubmitHandlerProps,
} from "./types/create-dialog.handlers.types";
import type { EventSchema } from "@/app/(protected)/(pages)/calendar/components/calendar/schemas/types/event.schema.types";

const submitHandler = async ({
  form,
  setAlert,
  setLoading,
  values,
}: SubmitHandlerProps): Promise<void> => {
  console.log("submitHandler", values);
  setAlert(null);
  setLoading(true);

  try {
    // const data = await resetAction({ values });f
    const data = await new Promise<{ error?: string; success?: string }>(
      (resolve) => {
        setTimeout(() => {
          resolve({ success: "Event created successfully" });
        }, 2000);
      },
    );

    if (data?.error) {
      setAlert({ type: "error", message: data.error });
    }

    if (data?.success) {
      setAlert({ type: "success", message: data.success });
      form.reset();
    }
  } catch {
    setAlert({ type: "error", message: "Something went wrong" });
  } finally {
    setLoading(false);
  }
};

const CreateDialogHandlers = ({
  form,
  setAlert,
  setLoading,
}: CreateDialogHandlersProps): CreateDialogHandlersReturn => {
  return {
    handleSubmit: (values: EventSchema) =>
      submitHandler({
        form,
        setAlert,
        setLoading,
        values,
      }),
  };
};

export { CreateDialogHandlers };
