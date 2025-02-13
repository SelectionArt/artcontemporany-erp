// Actions
import { fetchColors } from "./actions/colors.actions";
// Components
import { ColorsContainer } from "./colors.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colores",
  description: "Página de colores",
};

const ColorsPage = async () => {
  const colors = await fetchColors();
  return <ColorsContainer initialData={colors} />;
};

export default ColorsPage;
