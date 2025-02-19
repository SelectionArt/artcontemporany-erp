// Types
import type { Frame } from "../../types/frames.container.types";
import type { FrameSchema } from "../../schemas/types/frame.schema.types";
import { Manufacturer, Material } from "@prisma/client";

type CreateFrameProps = {
  newImages: File[];
  values: FrameSchema;
};

type CreateFrameReturn = {
  frame?: Frame;
  error?: string;
  success?: string;
};

type DeleteFrameProps = {
  id: string;
};

type DeleteFrameReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleFramesProps = {
  ids: string[];
};

type DeleteMultipleFramesReturn = {
  success?: string;
  error?: string;
};

type FetchFramesReturn = {
  id: string;
  name: string;
  description: string | null;
  reference: string;
  weight: number | null;
  height: number | null;
  galce: number | null;
  manufacturer: Manufacturer | null;
  material: Material | null;
  createdAt: Date;
  updatedAt: Date;
}[];

type FetchFiltersReturn = {
  manufacturers: Manufacturer[];
  materials: Material[];
};


type UpdateFrameProps = {
  id: string;
  newImages: File[];
  toDelete: string[];
  values: FrameSchema;
};

type UpdateFrameReturn = {
  frame?: Frame;
  error?: string;
  success?: string;
};

export type {
  CreateFrameProps,
  CreateFrameReturn,
  DeleteFrameProps,
  DeleteFrameReturn,
  DeleteMultipleFramesProps,
  DeleteMultipleFramesReturn,
  FetchFramesReturn,
  FetchFiltersReturn,
  UpdateFrameProps,
  UpdateFrameReturn,
};
