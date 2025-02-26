// Types
import type { UseFormReturn } from "react-hook-form";
import type { PersonSchema } from "../../../schemas/types/person.schema.types";

type PersonFormProps = {
  form: UseFormReturn<PersonSchema>;
  handleSubmit: (values: PersonSchema) => void;
  label: string;
  loading: boolean;
};

export type { PersonFormProps };
