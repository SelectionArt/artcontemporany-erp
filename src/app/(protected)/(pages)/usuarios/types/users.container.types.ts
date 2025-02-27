type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  isAuthorized: boolean;
};

type UsersProps = {
  initialData: User[];
};

export type { User, UsersProps };
