// Types
import { AuthStore } from "@/app/(auth)/stores/auth-provider/types/auth-provider.store.types";

type AuthProviderButtonsHookReturn = {
  handleButtonClick: (provider: string) => void;
  loading: AuthStore["loading"];
};

export type { AuthProviderButtonsHookReturn };
