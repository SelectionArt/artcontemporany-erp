// Types
import type { Support } from "../../types/supports.container.types";
import type { SupportSchema } from "../../schemas/types/support.schema.types";

type CreateSupportProps = {
  values: SupportSchema;
};

type CreateSupportReturn = {
  support?: Support;
  error?: string;
  success?: string;
};

type DeleteSupportProps = {
  id: string;
};

type DeleteSupportReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleSupportsProps = {
  ids: string[];
};

type DeleteMultipleSupportsReturn = {
  success?: string;
  error?: string;
};

type FetchSupportsReturn = Support[];

type UpdateSupportProps = {
  id: string;
  values: SupportSchema;
};

type UpdateSupportReturn = {
  support?: Support;
  error?: string;
  success?: string;
};

export type {
  CreateSupportProps,
  CreateSupportReturn,
  DeleteSupportProps,
  DeleteSupportReturn,
  DeleteMultipleSupportsProps,
  DeleteMultipleSupportsReturn,
  FetchSupportsReturn,
  UpdateSupportProps,
  UpdateSupportReturn,
};
