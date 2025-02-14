// Types
import type { Style } from "../../types/styles.container.types";
import type { StyleSchema } from "../../schemas/types/style.schema.types";

type CreateStyleProps = {
  values: StyleSchema;
};

type CreateStyleReturn = {
  style?: Style;
  error?: string;
  success?: string;
};

type DeleteStyleProps = {
  id: string;
};

type DeleteStyleReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleStylesProps = {
  ids: string[];
};

type DeleteMultipleStylesReturn = {
  success?: string;
  error?: string;
};

type FetchStylesReturn = Style[];

type UpdateStyleProps = {
  id: string;
  values: StyleSchema;
};

type UpdateStyleReturn = {
  style?: Style;
  error?: string;
  success?: string;
};

export type {
  CreateStyleProps,
  CreateStyleReturn,
  DeleteStyleProps,
  DeleteStyleReturn,
  DeleteMultipleStylesProps,
  DeleteMultipleStylesReturn,
  FetchStylesReturn,
  UpdateStyleProps,
  UpdateStyleReturn,
};
