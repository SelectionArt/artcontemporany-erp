// Vendors
import { create } from "zustand";
// Types
import { AuthStore } from "./types/auth-provider.store.types";

const useAuthProviderStore = create<AuthStore>()((set) => ({
  loading: {
    provider: "",
    status: false,
  },
  setLoading: ({ provider, status }) =>
    set(() => ({
      loading: {
        provider,
        status,
      },
    })),
}));

export { useAuthProviderStore };
