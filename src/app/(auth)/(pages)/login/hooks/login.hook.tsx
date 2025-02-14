// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import { LoginHandlers } from "../handlers/login.handlers";
// Schemas
import { loginSchema } from "../schemas/login.schema";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { LoginSchema } from "../schemas/types/login.schema.types";
import type { LoginHookReturn } from "./types/login.hook.types";

const LoginHook = (): LoginHookReturn => {
  const [alert, setAlert] = useState<AlertFormProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const { handleSubmit, handleToggleShowPassword } = LoginHandlers({
    form,
    router,
    setAlert,
    setLoading,
    setShowPassword,
    showPassword,
  });

  return {
    alert,
    form,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
  };
};

export { LoginHook };
