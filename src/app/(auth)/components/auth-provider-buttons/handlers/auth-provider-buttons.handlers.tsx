// Vendors
import { signIn } from "next-auth/react";
// Constants
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
// Types
import {
  AuthProviderButtonClick,
  AuthProviderButtonsHandlersProps,
  AuthProviderButtonsHandlersReturn,
} from "./types/auth-provider-buttons.handlers.types";

const buttonClickHandler = async ({
  setLoading,
  provider,
}: AuthProviderButtonClick): Promise<void> => {
  setLoading({ provider, status: true });

  await signIn(provider, {
    callbackUrl: DEFAULT_LOGIN_REDIRECT,
  });
};

const AuthProviderButtonsHandlers = ({
  setLoading,
}: AuthProviderButtonsHandlersProps): AuthProviderButtonsHandlersReturn => {
  return {
    handleButtonClick: (provider: string) =>
      buttonClickHandler({ setLoading, provider }),
  };
};

export { AuthProviderButtonsHandlers };
