// Actions
import { fetchPricings, fetchSection } from "./actions/pricings.actions";
// Components
import { PricingsContainer } from "./pricings.container";
// Types
import type {
  PricingPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { slug } = await params;
  const section = await fetchSection({ slug });

  if (!section) {
    return {
      title: "Tarifa no encontrada",
      description: "La tarifa que buscas no está disponible.",
    };
  }

  return {
    title: section.name,
    description: `Tarifa de precios ${section.name}`,
  };
};

const PricingsPage = async ({ params }: PricingPageProps) => {
  const { slug } = await params;
  const pricings = await fetchPricings({ slug });
  return <PricingsContainer initialData={pricings} />;
};

export { generateMetadata };
export default PricingsPage;
