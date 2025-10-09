// Types
import type { UseFormReturn } from "react-hook-form";
import type { Person } from "../../types/persons.container.types";
import type { PersonSchema } from "../../schemas/types/person.schema.types";
import type { PersonsHandlersReturn } from "../../handlers/types/persons.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/persons.hook.utils.types";
import type { Dispatch, SetStateAction } from "react";

type PersonsHookProps = {
  initialData: Person[];
};

type PersonsHookReturn = Omit<
  PersonsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Person>;
  data: Person[];
  form: UseFormReturn<PersonSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Person>;
  observations: string;
  openAlert: boolean;
  openDialog: boolean;
  saved: boolean;
  saving: boolean;
  selectedRow: Person | null;
  selectedRows: Person[];
  setObservations: Dispatch<SetStateAction<string>>;
};

export type { PersonsHookProps, PersonsHookReturn };
