// Actions
import { fetchSections } from "./actions/sections.actions";
// Components
import { SectionsContainer } from "./sections.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secciones",
  description: "Página de secciones",
};

const SectionsPage = async () => {
  const sections = await fetchSections();
  return <SectionsContainer initialData={sections} />;
};

export default SectionsPage;
