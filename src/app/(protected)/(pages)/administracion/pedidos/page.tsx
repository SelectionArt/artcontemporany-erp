// Actions
import {
  fetchArtworks,
  fetchBudgets,
  fetchClients,
  fetchFrames,
  fetchPricings,
} from "./actions/budgets.actions";
// Components
import { BudgetsContainer } from "./budgets.container";
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
