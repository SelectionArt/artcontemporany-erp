// Actions
import {
  fetchArtworks,
  fetchClients,
  fetchFrames,
  fetchPricings,
} from "../../features/pedidos/actions/budgets.actions";
import { fetchBudgets } from "./actions/budgets.actions";
// Components
import { BudgetsContainer } from "../../features/pedidos/budgets.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presupuestos",
  description: "Página de presupuestos",
};

const BudgetsPage = async () => {
  const [artworks, budgets, clients, frames, pricings] = await Promise.all([
    fetchArtworks(),
    fetchBudgets(),
    fetchClients(),
    fetchFrames(),
    fetchPricings(),
  ]);
  return (
    <BudgetsContainer
      artworks={artworks}
      budgets={budgets}
      clients={clients}
      frames={frames}
      pricings={pricings}
    />
  );
};

export default BudgetsPage;
