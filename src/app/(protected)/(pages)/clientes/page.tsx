// Actions
import { fetchClients } from "./actions/clients.actions";
// Components
import { ClientsContainer } from "./clients.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clientes",
  description: "Página de clientes",
};

const ClientsPage = async () => {
  const clients = await fetchClients();
  return <ClientsContainer initialData={clients} />;
};

export default ClientsPage;
