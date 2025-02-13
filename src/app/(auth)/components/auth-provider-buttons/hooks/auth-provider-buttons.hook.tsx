// Handlers
import { AuthProviderButtonsHandlers } from "../handlers/auth-provider-buttons.handlers";
// Stores
import { useAuthProviderStore } from "@/app/(auth)/stores/auth-provider/auth-provider.store";
// Types
import { AuthProviderButtonsHookReturn } from "./types/auth-provider-buttons.hook.types";

const AuthProviderButtonsHook = (): AuthProviderButtonsHookReturn => {
  const { loading, setLoading } = useAuthProviderStore();

  const { handleButtonClick } = AuthProviderButtonsHandlers({
    setLoading,
  });

  return {
    handleButtonClick,
    loading,
  };
};

export { AuthProviderButtonsHook };
