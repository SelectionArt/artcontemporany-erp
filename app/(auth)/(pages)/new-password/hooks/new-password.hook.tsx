// Vendors
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import { NewPasswordHandlers } from "../handlers/new-password.handlers";
// Schemas
import { newPasswordSchema } from "../schemas/new-password.schema";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { NewPasswordHookReturn } from "./types/new-password.hook.types";
import type { NewPasswordSchema } from "../schemas/types/new-password.schema.types";

const NewPasswordHook = (): NewPasswordHookReturn => {
  const [alert, setAlert] = useState<AlertFormProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm<NewPasswordSchema>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const { handleSubmit, handleToggleShowPassword } = NewPasswordHandlers({
    form,
    setAlert,
    setLoading,
    setShowPassword,
    showPassword,
    token,
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

export { NewPasswordHook };
