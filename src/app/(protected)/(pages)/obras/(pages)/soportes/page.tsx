// Actions
import { fetchSupports } from "./actions/supports.actions";
// Components
import { SupportsContainer } from "./supports.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soportes",
  description: "Página de soportes",
};

const SupportsPage = async () => {
  const supports = await fetchSupports();
  return <SupportsContainer initialData={supports} />;
};

export default SupportsPage;
