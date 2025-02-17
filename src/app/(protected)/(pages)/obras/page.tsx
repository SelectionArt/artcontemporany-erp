// Actions
import { fetchArtworks, fetchFilters } from "./actions/artworks.actions";

// Components
import { ArtworksContainer } from "./artworks.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestión de obras",
  description: "Página de gestión de obras",
};

const ArtworksPage = async () => {
  const [artworks, filters] = await Promise.all([
    fetchArtworks(),
    fetchFilters(),
  ]);
  return <ArtworksContainer artworks={artworks} filters={filters} />;
};

export default ArtworksPage;
