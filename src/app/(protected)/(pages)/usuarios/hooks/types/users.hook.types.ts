// Types
import type { UseFormReturn } from "react-hook-form";
import type { User } from "../../types/users.container.types";
import type { UserSchema } from "../../schemas/types/user.schema.types";
import type { UsersHandlersReturn } from "../../handlers/types/users.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/users.hook.utils.types";

type UsersHookProps = {
  initialData: User[];
};

type UsersHookReturn = Omit<
  UsersHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<User>;
  data: User[];
  form: UseFormReturn<UserSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<User>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: User | null;
  selectedRows: User[];
};

export type { UsersHookProps, UsersHookReturn };
