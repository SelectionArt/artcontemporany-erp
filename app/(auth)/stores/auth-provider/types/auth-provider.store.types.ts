type Loading = {
  provider: string;
  status: boolean;
};

type AuthStore = {
  loading: Loading;
  setLoading: ({ provider, status }: Loading) => void;
};

export type { AuthStore };
