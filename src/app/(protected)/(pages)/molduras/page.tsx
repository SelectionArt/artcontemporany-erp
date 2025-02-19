// Actions
import { fetchFrames, fetchFilters } from "./actions/frames.actions";

// Components
import { FramesContainer } from "./frames.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestión de molduras",
  description: "Página de gestión de molduras",
};

const FramesPage = async () => {
  const [frames, filters] = await Promise.all([fetchFrames(), fetchFilters()]);
  return <FramesContainer frames={frames} filters={filters} />;
};

export default FramesPage;
