// Types
import type { Metadata } from "next";

type ClientPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type { ClientPageProps, GenerateMetadataProps, GenerateMetadataReturn };
