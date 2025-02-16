// Types
import type { Metadata } from "next";

type ArtworkPageProps = {
  params: { id: string };
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type { ArtworkPageProps, GenerateMetadataProps, GenerateMetadataReturn };
