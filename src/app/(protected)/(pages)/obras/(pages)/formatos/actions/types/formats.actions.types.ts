// Types
import type { Format } from "../../types/formats.container.types";
import type { FormatSchema } from "../../schemas/types/format.schema.types";

type CreateFormatProps = {
  values: FormatSchema;
};

type CreateFormatReturn = {
  format?: Format;
  error?: string;
  success?: string;
};

type DeleteFormatProps = {
  id: string;
};

type DeleteFormatReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleFormatsProps = {
  ids: string[];
};

type DeleteMultipleFormatsReturn = {
  success?: string;
  error?: string;
};

type FetchFormatsReturn = Format[];

type UpdateFormatProps = {
  id: string;
  values: FormatSchema;
};

type UpdateFormatReturn = {
  format?: Format;
  error?: string;
  success?: string;
};

export type {
  CreateFormatProps,
  CreateFormatReturn,
  DeleteFormatProps,
  DeleteFormatReturn,
  DeleteMultipleFormatsProps,
  DeleteMultipleFormatsReturn,
  FetchFormatsReturn,
  UpdateFormatProps,
  UpdateFormatReturn,
};
