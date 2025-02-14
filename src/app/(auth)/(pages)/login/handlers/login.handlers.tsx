// Actions
import { loginAction } from "../actions/login.action";
// Routes
import { DEFAULT_LOGIN_REDIRECT } from "../../../../../routes";
// Types
import type { LoginSchema } from "../schemas/types/login.schema.types";
import type {
  LoginHandlersProps,
  LoginHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
} from "./types/login.handlers.types";

const submitHandler = async ({
  form,
  router,
  setAlert,
  setLoading,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setAlert(null);
  setLoading(true);

  try {
    const { error, success } = (await loginAction({ values })) ?? {};

    if (error) {
      setAlert({ type: "error", message: error });
      form.setValue("password", "");
      return;
    }

    if (success) {
      setAlert({ type: "success", message: success });
      form.reset();
      return;
    }

    router.push(DEFAULT_LOGIN_REDIRECT);
  } catch {
    setAlert({ type: "error", message: "Something went wrong" });
  } finally {
    setLoading(false);
  }
};

const toggleShowPasswordHandler = ({
  setShowPassword,
  showPassword,
}: ToggleShowPasswordHandlerProps): void => {
  setShowPassword(!showPassword);
};

const LoginHandlers = ({
  form,
  router,
  setAlert,
  setShowPassword,
  setLoading,
  showPassword,
}: LoginHandlersProps): LoginHandlersReturn => {
  return {
    handleSubmit: (values: LoginSchema) =>
      submitHandler({
        form,
        router,
        setAlert,
        setLoading,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export { LoginHandlers };
