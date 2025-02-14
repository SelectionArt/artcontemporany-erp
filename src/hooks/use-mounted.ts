import { useEffect, useState } from "react";

type UseIsMountedReturn = {
  mounted: boolean;
};

const useIsMounted = (): UseIsMountedReturn => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return {
    mounted,
  };
};

export { useIsMounted };
