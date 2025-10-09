// Types
import type { UseFormReturn } from "react-hook-form";
import type { Client } from "../../types/clients.container.types";
import type { ClientSchema } from "../../schemas/types/client.schema.types";
import type { ClientsHandlersReturn } from "../../handlers/types/clients.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/clients.hook.utils.types";

type ClientsHookProps = {
  initialData: Client[];
};

type ClientsHookReturn = Omit<
  ClientsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Client>;
  data: Client[];
  form: UseFormReturn<ClientSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Client>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Client | null;
  selectedRows: Client[];
};

export type { ClientsHookProps, ClientsHookReturn };
