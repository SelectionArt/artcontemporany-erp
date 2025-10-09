// Actions
import { fetchSalespersons } from "./actions/salespersons.actions";
// Components
import { SalespersonsContainer } from "./salespersons.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comerciales",
  description: "Página de comerciales",
};

const SalespersonsPage = async () => {
  const salespersons = await fetchSalespersons();
  return <SalespersonsContainer initialData={salespersons} />;
};

export default SalespersonsPage;
