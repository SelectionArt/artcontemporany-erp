// Actions
import { fetchPricings } from "./actions/pricings.actions";
// Components
import { PricingsContainer } from "./pricings.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifas",
  description: "Página de tarifas",
};

const PricingsPage = async () => {
  const pricings = await fetchPricings();
  return <PricingsContainer initialData={pricings} />;
};

export default PricingsPage;
