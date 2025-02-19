import { FrameImage, Manufacturer, Material } from "@prisma/client";

type FetchFrameProps = {
  id: string;
};

type FetchFrameReturn = {
  id: string;
  name: string;
  description: string | null;
  reference: string;
  width: number | null;
  height: number | null;
  galce: number | null;
  images: FrameImage[];
  manufacturer: Manufacturer | null;
  material: Material | null;
  createdAt: Date;
  updatedAt: Date;
};

export type { FetchFrameProps, FetchFrameReturn };
