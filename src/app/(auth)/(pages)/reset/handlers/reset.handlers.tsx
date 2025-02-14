// Actions
import { resetAction } from "../actions/reset.action";
// Types
import type {
  ResetHandlersProps,
  ResetHandlersReturn,
  SubmitHandlerProps,
} from "./types/reset.handlers.types";
import type { ResetSchema } from "../schemas/types/reset.schema.types";

const submitHandler = async ({
  form,
  setAlert,
  setLoading,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setAlert(null);
  setLoading(true);

  try {
    const data = await resetAction({ values });

    if (data?.error) {
      setAlert({ type: "error", message: data.error });
    }

    if (data?.success) {
      setAlert({ type: "success", message: data.success });
    }
  } catch {
    setAlert({ type: "error", message: "Something went wrong" });
  } finally {
    form.reset();
    setLoading(false);
  }
};

const ResetHandlers = ({
  form,
  setAlert,
  setLoading,
}: ResetHandlersProps): ResetHandlersReturn => {
  return {
    handleSubmit: (values: ResetSchema) =>
      submitHandler({
        form,
        setAlert,
        setLoading,
        values,
      }),
  };
};

export { ResetHandlers };
