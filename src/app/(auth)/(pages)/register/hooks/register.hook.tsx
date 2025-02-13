// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import { RegisterHandlers } from "../handlers/register.handlers";
// Schemas
import { registerSchema } from "../schemas/register.schema";
// Stores
import { useAuthProviderStore } from "@/app/(auth)/stores/auth-provider/auth-provider.store";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { RegisterSchema } from "../schemas/types/register.schema.types";
import type { RegisterHookReturn } from "./types/register.hook.types";

const RegisterHook = (): RegisterHookReturn => {
  const [alert, setAlert] = useState<AlertFormProps | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { loading, setLoading } = useAuthProviderStore();

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, handleToggleShowPassword } = RegisterHandlers({
    form,
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

export { RegisterHook };
