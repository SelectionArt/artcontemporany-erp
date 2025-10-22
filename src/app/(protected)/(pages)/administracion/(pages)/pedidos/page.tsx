// Actions
import {
  fetchArtworks,
  fetchClients,
  fetchFrames,
  fetchPricings,
  fetchSalespersons,
} from "../../features/pedidos/actions/budgets.actions";
import { fetchBudgets } from "./actions/orders.actions";
// Components
import { BudgetsContainer } from "../../features/pedidos/budgets.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedidos",
  description: "Página de pedidos",
};

const OrdersPage = async () => {
  const [artworks, budgets, clients, frames, pricings, salespersons] =
    await Promise.all([
      fetchArtworks(),
      fetchBudgets(),
      fetchClients(),
      fetchFrames(),
      fetchPricings(),
      fetchSalespersons(),
    ]);
  return (
    <BudgetsContainer
      artworks={artworks}
      budgets={budgets}
      clients={clients}
      frames={frames}
      page="orders"
      pricings={pricings}
      salespersons={salespersons}
    />
  );
};

export default OrdersPage;
