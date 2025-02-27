// Actions
import { fetchUsers } from "./actions/users.actions";
// Components
import { UsersContainer } from "./users.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usuarios",
  description: "Página de usuarios",
};

const UsersPage = async () => {
  const users = await fetchUsers();
  return <UsersContainer initialData={users} />;
};

export default UsersPage;
