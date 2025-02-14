// Actions
import { fetchArtists } from "./actions/artists.actions";
// Components
import { ArtistsContainer } from "./artists.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artistas",
  description: "Página de gestión artistas",
};

const ArtistsPage = async () => {
  const artists = await fetchArtists();
  return <ArtistsContainer initialData={artists} />;
};

export default ArtistsPage;
