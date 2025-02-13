// Types
import { AuthStoreType } from "@/app/(auth)/stores/auth-provider/types/auth-provider.store.types";

type AuthProviderButtonsHandlersReturn = {
  handleButtonClick: (provider: string) => void;
};

type AuthProviderButtonsHandlersProps = {
  setLoading: AuthStoreType["setLoading"];
};

type AuthProviderButtonClick = AuthProviderButtonsHandlersProps & {
  provider: string;
};

export type {
  AuthProviderButtonClick,
  AuthProviderButtonsHandlersProps,
  AuthProviderButtonsHandlersReturn,
};
