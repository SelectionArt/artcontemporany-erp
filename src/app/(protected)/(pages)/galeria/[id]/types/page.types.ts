// Types
import type { Metadata } from "next";

type ArtworkPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type { ArtworkPageProps, GenerateMetadataProps, GenerateMetadataReturn };
