// Actions
import { loginAction } from "../actions/login.action";
// Routes
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
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
  setShowTwoFactor,
  setLoading,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setAlert(null);
  setLoading({ provider: "credentials", status: true });

  try {
    const { error, success, twoFactor } = (await loginAction({ values })) ?? {};

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

    if (twoFactor) {
      setShowTwoFactor(true);
      return;
    }

    router.push(DEFAULT_LOGIN_REDIRECT);
  } catch {
    setAlert({ type: "error", message: "Something went wrong" });
  } finally {
    setLoading({ provider: "credentials", status: false });
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
  setShowTwoFactor,
  setLoading,
  showPassword,
}: LoginHandlersProps): LoginHandlersReturn => {
  return {
    handleSubmit: (values: LoginSchema) =>
      submitHandler({
        form,
        router,
        setAlert,
        setShowTwoFactor,
        setLoading,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export { LoginHandlers };
