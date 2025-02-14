// Actions
import { verificationAction } from "../actions/verification.action";
// Types
import type {
  VerificationHandlersProps,
  VerificationHandlersReturn,
  LoadHandlerProps,
} from "./types/verification.handlers.types";

const loadHandler = async ({
  setAlert,
  setLoading,
  token,
}: LoadHandlerProps): Promise<void> => {
  setAlert(null);
  setLoading(true);
  try {
    const data = await verificationAction({ token });
    if (data?.error) {
      setAlert({ type: "error", message: data.error });
    }
    if (data?.success) {
      setAlert({ type: "success", message: data.success });
    }
  } catch {
    setAlert({ type: "error", message: "Something went wrong" });
  } finally {
    setLoading(false);
  }
};

const VerificationHandlers = ({
  setAlert,
  setLoading,
  token,
}: VerificationHandlersProps): VerificationHandlersReturn => {
  return {
    handleLoad: () =>
      loadHandler({
        setAlert,
        setLoading,
        token,
      }),
  };
};

export { VerificationHandlers };
