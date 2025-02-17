// Types
import type { Manufacturer } from "../../types/manufacturers.container.types";
import type { ManufacturerSchema } from "../../schemas/types/manufacturer.schema.types";

type CreateManufacturerProps = {
  values: ManufacturerSchema;
};

type CreateManufacturerReturn = {
  manufacturer?: Manufacturer;
  error?: string;
  success?: string;
};

type DeleteManufacturerProps = {
  id: string;
};

type DeleteManufacturerReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleManufacturersProps = {
  ids: string[];
};

type DeleteMultipleManufacturersReturn = {
  success?: string;
  error?: string;
};

type FetchManufacturersReturn = Manufacturer[];

type UpdateManufacturerProps = {
  id: string;
  values: ManufacturerSchema;
};

type UpdateManufacturerReturn = {
  manufacturer?: Manufacturer;
  error?: string;
  success?: string;
};

export type {
  CreateManufacturerProps,
  CreateManufacturerReturn,
  DeleteManufacturerProps,
  DeleteManufacturerReturn,
  DeleteMultipleManufacturersProps,
  DeleteMultipleManufacturersReturn,
  FetchManufacturersReturn,
  UpdateManufacturerProps,
  UpdateManufacturerReturn,
};
