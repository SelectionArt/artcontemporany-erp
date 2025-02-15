// Actions
import { fetchArtists } from "./(pages)/artistas/actions/artists.actions";
import { fetchArtworks } from "./actions/artworks.actions";
import { fetchColors } from "./(pages)/colores/actions/colors.actions";
import { fetchFinishes } from "./(pages)/acabados/actions/finishes.actions";
import { fetchFormats } from "./(pages)/formatos/actions/formats.actions";
import { fetchStyles } from "./(pages)/estilos/actions/styles.actions";
import { fetchSupports } from "./(pages)/soportes/actions/supports.actions";

// Components
import { ArtworksContainer } from "./artworks.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obras",
  description: "Página de obras",
};

const ArtworksPage = async () => {
  const [artists, artworks, colors, finishes, formats, styles, supports] =
    await Promise.all([
      fetchArtists(),
      fetchArtworks(),
      fetchColors(),
      fetchFinishes(),
      fetchFormats(),
      fetchStyles(),
      fetchSupports(),
    ]);
  return (
    <ArtworksContainer
      artists={artists}
      colors={colors}
      finishes={finishes}
      formats={formats}
      initialData={artworks}
      styles={styles}
      supports={supports}
    />
  );
};

export default ArtworksPage;
