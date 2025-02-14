// Actions
import { fetchFinishes } from "./actions/finishes.actions";
// Components
import { FinishesContainer } from "./finishes.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acabados",
  description: "Página de acabados",
};

const FinishesPage = async () => {
  const finishes = await fetchFinishes();
  return <FinishesContainer initialData={finishes} />;
};

export default FinishesPage;
