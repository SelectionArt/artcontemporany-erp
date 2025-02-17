// Actions
import { fetchFrames } from "./actions/frames.actions";
// Components
import { FramesContainer } from "./frames.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Molduras",
  description: "Página de molduras",
};

const FramesPage = async () => {
  const frames = await fetchFrames();
  return <FramesContainer initialData={frames} />;
};

export default FramesPage;
