// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import constants from "../constants/login.constants";
// Handlers
import { LoginHandlers } from "../handlers/login.handlers";
// Schemas
import { loginSchema } from "../schemas/login.schema";
// Stores
import { useAuthProviderStore } from "@/app/(auth)/stores/auth-provider/auth-provider.store";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { LoginSchema } from "../schemas/types/login.schema.types";
import type { LoginHookReturn } from "./types/login.hook.types";

const LoginHook = (): LoginHookReturn => {
  const [alert, setAlert] = useState<AlertFormProps | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showTwoFactor, setShowTwoFactor] = useState<boolean>(false);

  const { loading, setLoading } = useAuthProviderStore();

  const searchParams = useSearchParams();
  const urlError = searchParams.get("error");

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      otp: "",
    },
  });

  const router = useRouter();

  const { handleSubmit, handleToggleShowPassword } = LoginHandlers({
    form,
    router,
    setAlert,
    setLoading,
    setShowPassword,
    setShowTwoFactor,
    showPassword,
  });

  useEffect(() => {
    if (urlError === constants.OAUTH_ACCOUNT_NOT_LINKED) {
      setAlert({
        type: "error",
        message: constants.OAUTH_ACCOUNT_NOT_LINKED_ERROR,
      });
    }
  }, [urlError]);

  return {
    alert,
    form,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
    showTwoFactor,
  };
};

export { LoginHook };
