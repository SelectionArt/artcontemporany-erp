// Types
import type { Metadata } from "next";

type PricingPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ slug: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type { PricingPageProps, GenerateMetadataProps, GenerateMetadataReturn };
