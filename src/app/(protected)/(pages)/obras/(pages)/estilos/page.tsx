// Actions
import { fetchStyles } from "./actions/styles.actions";
// Components
import { StylesContainer } from "./styles.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estilos",
  description: "Página de estilos",
};

const StylesPage = async () => {
  const styles = await fetchStyles();
  return <StylesContainer initialData={styles} />;
};

export default StylesPage;
