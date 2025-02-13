// Vendors
import { useState } from "react";
// Handlers
import { CreateDialogHandlers } from "../handlers/create-dialog.handlers";
// Types
import type { AlertFormProps } from "@/components/ui/alert-form";
import type {
  CreateDialogHookProps,
  CreateDialogHookReturn,
} from "./types/create-dialog.hook.types";

const CreateDialogHook = ({
  form,
}: CreateDialogHookProps): CreateDialogHookReturn => {
  const [alert, setAlert] = useState<AlertFormProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { handleSubmit } = CreateDialogHandlers({
    form,
    setAlert,
    setLoading,
  });

  return {
    alert,
    handleSubmit,
    loading,
  };
};

export { CreateDialogHook };
