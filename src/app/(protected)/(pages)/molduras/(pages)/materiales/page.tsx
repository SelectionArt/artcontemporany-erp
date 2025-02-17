// Actions
import { fetchMaterials } from "./actions/materials.actions";
// Components
import { MaterialsContainer } from "./materials.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Materiales",
  description: "Página de materiales",
};

const MaterialsPage = async () => {
  const materials = await fetchMaterials();
  return <MaterialsContainer initialData={materials} />;
};

export default MaterialsPage;
