// Types
import type { Color } from "../../types/colors.container.types";
import type { ColorSchema } from "../../schemas/types/color.schema.types";

type CreateColorProps = {
  values: ColorSchema;
};

type CreateColorReturn = {
  color?: Color;
  error?: string;
  success?: string;
};

type DeleteColorProps = {
  id: string;
};

type DeleteColorReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleColorsProps = {
  ids: string[];
};

type DeleteMultipleColorsReturn = {
  success?: string;
  error?: string;
};

type FetchColorsReturn = Color[];

type UpdateColorProps = {
  id: string;
  values: ColorSchema;
};

type UpdateColorReturn = {
  color?: Color;
  error?: string;
  success?: string;
};

export type {
  CreateColorProps,
  CreateColorReturn,
  DeleteColorProps,
  DeleteColorReturn,
  DeleteMultipleColorsProps,
  DeleteMultipleColorsReturn,
  FetchColorsReturn,
  UpdateColorProps,
  UpdateColorReturn,
};
