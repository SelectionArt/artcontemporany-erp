// Vendors
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
// Handlers
import { VerificationHandlers } from "../handlers/verification.handlers";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { VerificationHookReturn } from "./types/verification.hook.types";

const VerificationHook = (): VerificationHookReturn => {
  const [alert, setAlert] = useState<AlertFormProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { handleLoad } = VerificationHandlers({
    setAlert,
    setLoading,
    token,
  });

  useEffect(() => {
    handleLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    alert,
    loading,
  };
};

export { VerificationHook };
