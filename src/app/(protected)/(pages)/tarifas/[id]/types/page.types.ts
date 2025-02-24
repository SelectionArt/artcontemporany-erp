// Types
import type { Metadata } from "next";

type PricingPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type { PricingPageProps, GenerateMetadataProps, GenerateMetadataReturn };
