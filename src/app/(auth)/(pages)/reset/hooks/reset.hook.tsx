// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import { ResetHandlers } from "../handlers/reset.handlers";
// Schemas
import { resetSchema } from "../schemas/reset.schema";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type { ResetSchema } from "../schemas/types/reset.schema.types";
import type { ResetHookReturn } from "./types/reset.hook.types";

const ResetHook = (): ResetHookReturn => {
  const [alert, setAlert] = useState<AlertFormProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<ResetSchema>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: "",
    },
  });

  const { handleSubmit } = ResetHandlers({
    form,
    setAlert,
    setLoading,
  });

  return {
    alert,
    form,
    handleSubmit,
    loading,
  };
};

export { ResetHook };
