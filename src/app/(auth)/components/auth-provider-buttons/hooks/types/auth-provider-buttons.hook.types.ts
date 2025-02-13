// Types
import { AuthStoreType } from "@/app/(auth)/stores/auth-provider/types/auth-provider.store.types";

type AuthProviderButtonsHookReturn = {
  handleButtonClick: (provider: string) => void;
  loading: AuthStoreType["loading"];
};

export type { AuthProviderButtonsHookReturn };
