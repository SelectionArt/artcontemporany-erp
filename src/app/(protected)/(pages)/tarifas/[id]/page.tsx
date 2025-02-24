// Actions
import { fetchPricings, fetchPricing } from "./actions/pricings.actions";
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
  const { id } = await params;
  const pricing = await fetchPricing({ id });

  if (!pricing) {
    return {
      title: "Tarifa no encontrada",
      description: "La tarifa que buscas no está disponible.",
    };
  }

  return {
    title: pricing.name,
    description: `Tarifa de precios ${pricing.name}`,
  };
};

const PricingsPage = async ({ params }: PricingPageProps) => {
  const { id } = await params;
  const pricings = await fetchPricings({ id });
  return <PricingsContainer initialData={pricings} />;
};

export { generateMetadata };
export default PricingsPage;
