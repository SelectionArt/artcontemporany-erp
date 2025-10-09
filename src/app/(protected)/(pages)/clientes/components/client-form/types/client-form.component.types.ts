// Types
import type { UseFormReturn } from "react-hook-form";
import type { ClientSchema } from "../../../schemas/types/client.schema.types";

type ClientFormProps = {
  form: UseFormReturn<ClientSchema>;
  handleSubmit: (values: ClientSchema) => void;
  label: string;
  loading: boolean;
};

export type { ClientFormProps };
