// Actions
import { fetchFrame } from "./actions/frame.actions";
// Components
import { FrameContainer } from "./frame.container";
// Types
import type {
  FramePageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const frame = await fetchFrame({ id });

  if (!frame) {
    return {
      title: "Moldura no encontrada",
      description: "La moldura que buscas no está disponible.",
    };
  }

  return {
    title: frame.name,
    description: `Moldura de ${frame.name} con referencia ${frame.reference}.`,
  };
};

const FramePage = async ({ params }: FramePageProps) => {
  const { id } = await params;

  const frame = await fetchFrame({ id });

  if (!frame) {
    return <div className="p-4 text-center">Moldura no encontrada.</div>;
  }

  return <FrameContainer frame={frame} />;
};

export { generateMetadata };
export default FramePage;
