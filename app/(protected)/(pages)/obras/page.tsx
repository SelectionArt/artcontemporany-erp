// Actions
import { fetchArtists } from "@/app/(protected)/(pages)/artistas/actions/artists.actions";
import { fetchArtworks } from "./actions/artworks.actions";
import { fetchColors } from "@/app/(protected)/(pages)/obras/(pages)/colores/actions/colors.actions";
import { fetchFinishes } from "@/app/(protected)/(pages)/obras/(pages)/acabados/actions/finishes.actions";
import { fetchFormats } from "@/app/(protected)/(pages)/obras/(pages)/formatos/actions/formats.actions";
import { fetchStyles } from "@/app/(protected)/(pages)/obras/(pages)/estilos/actions/styles.actions";
import { fetchSupports } from "@/app/(protected)/(pages)/obras/(pages)/soportes/actions/supports.actions";

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
