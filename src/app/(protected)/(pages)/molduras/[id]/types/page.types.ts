// Types
import type { Metadata } from "next";

type FramePageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type { FramePageProps, GenerateMetadataProps, GenerateMetadataReturn };
