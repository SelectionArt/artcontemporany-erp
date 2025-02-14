// Actions
import { newPasswordAction } from "../actions/new-password.action";
// Types
import type {
  NewPasswordHandlersProps,
  NewPasswordHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
} from "./types/new-password.handlers.types";
import type { NewPasswordSchema } from "../schemas/types/new-password.schema.types";

const submitHandler = async ({
  form,
  setAlert,
  setLoading,
  token,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setAlert(null);
  setLoading(true);

  try {
    const data = await newPasswordAction({ values, token });

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

const toggleShowPasswordHandler = ({
  setShowPassword,
  showPassword,
}: ToggleShowPasswordHandlerProps): void => {
  setShowPassword(!showPassword);
};

const NewPasswordHandlers = ({
  form,
  setAlert,
  setShowPassword,
  setLoading,
  showPassword,
  token,
}: NewPasswordHandlersProps): NewPasswordHandlersReturn => {
  return {
    handleSubmit: (values: NewPasswordSchema) =>
      submitHandler({
        form,
        setAlert,
        setLoading,
        token,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export { NewPasswordHandlers };
