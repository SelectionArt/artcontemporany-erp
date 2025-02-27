// Types
import type { User } from "../../types/users.container.types";
import type { UserSchema } from "../../schemas/types/user.schema.types";

type CreateUserProps = {
  values: UserSchema;
};

type CreateUserReturn = {
  user?: User;
  error?: string;
  success?: string;
};

type DeleteUserProps = {
  id: string;
};

type DeleteUserReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleUsersProps = {
  ids: string[];
};

type DeleteMultipleUsersReturn = {
  success?: string;
  error?: string;
};

type FetchUsersReturn = {
  
  name: string;
  email: string;
  role: string;
  isAuthorized: boolean;
}[];

type UpdateUserProps = {
  id: string;
  values: UserSchema;
};

type UpdateUserReturn = {
  user?: User;
  error?: string;
  success?: string;
};

export type {
  CreateUserProps,
  CreateUserReturn,
  DeleteUserProps,
  DeleteUserReturn,
  DeleteMultipleUsersProps,
  DeleteMultipleUsersReturn,
  FetchUsersReturn,
  UpdateUserProps,
  UpdateUserReturn,
};
