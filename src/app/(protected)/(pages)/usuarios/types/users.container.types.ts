import type { FetchUsersReturn } from "../actions/types/users.actions.types";

type User = FetchUsersReturn[number];

type UsersProps = {
  initialData: User[];
};

export type { User, UsersProps };
