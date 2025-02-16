// Actions
import { fetchArtwork } from "./actions/artwork.actions";
// Components
import { ArtworkContainer } from "./artwork.container";
// Types
import type {
  ArtworkPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const artwork = await fetchArtwork({ id });

  if (!artwork) {
    return {
      title: "Obra no encontrada",
      description: "La obra que buscas no está disponible.",
    };
  }

  return {
    title: artwork.title,
    description: `Obra de ${artwork.artist.name}`,
  };
};

const ArtworkPage = async ({ params }: ArtworkPageProps) => {
  const { id } = await params;
  console.log("🔍 ID recibido en servidor:", id);
  if (!id) {
    console.error("🚨 Error: params.id es undefined");
    return <div className="p-4 text-center">Error cargando la obra.</div>;
  }
  const artwork = await fetchArtwork({ id });

  if (!artwork) {
    return <div className="p-4 text-center">Obra no encontrada.</div>;
  }

  return <ArtworkContainer artwork={artwork} />;
};

export { generateMetadata };
export default ArtworkPage;
