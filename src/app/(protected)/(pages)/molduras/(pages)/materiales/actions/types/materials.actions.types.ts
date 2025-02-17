// Types
import type { Material } from "../../types/materials.container.types";
import type { MaterialSchema } from "../../schemas/types/material.schema.types";

type CreateMaterialProps = {
  values: MaterialSchema;
};

type CreateMaterialReturn = {
  material?: Material;
  error?: string;
  success?: string;
};

type DeleteMaterialProps = {
  id: string;
};

type DeleteMaterialReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleMaterialsProps = {
  ids: string[];
};

type DeleteMultipleMaterialsReturn = {
  success?: string;
  error?: string;
};

type FetchMaterialsReturn = Material[];

type UpdateMaterialProps = {
  id: string;
  values: MaterialSchema;
};

type UpdateMaterialReturn = {
  material?: Material;
  error?: string;
  success?: string;
};

export type {
  CreateMaterialProps,
  CreateMaterialReturn,
  DeleteMaterialProps,
  DeleteMaterialReturn,
  DeleteMultipleMaterialsProps,
  DeleteMultipleMaterialsReturn,
  FetchMaterialsReturn,
  UpdateMaterialProps,
  UpdateMaterialReturn,
};
