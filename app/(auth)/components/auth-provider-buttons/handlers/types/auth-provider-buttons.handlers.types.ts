// Types
import { AuthStore } from "../../../../stores/auth-provider/types/auth-provider.store.types";

type AuthProviderButtonsHandlersReturn = {
  handleButtonClick: (provider: string) => void;
};

type AuthProviderButtonsHandlersProps = {
  setLoading: AuthStore["setLoading"];
};

type AuthProviderButtonClick = AuthProviderButtonsHandlersProps & {
  provider: string;
};

export type {
  AuthProviderButtonClick,
  AuthProviderButtonsHandlersProps,
  AuthProviderButtonsHandlersReturn,
};
