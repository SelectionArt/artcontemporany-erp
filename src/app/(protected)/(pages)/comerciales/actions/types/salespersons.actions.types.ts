// Types
import type { Salesperson } from "../../types/salespersons.container.types";
import type { SalespersonSchema } from "../../schemas/types/salesperson.schema.types";

type CreateSalespersonProps = {
  values: SalespersonSchema;
};

type CreateSalespersonReturn = {
  salesperson?: Salesperson;
  error?: string;
  success?: string;
};

type DeleteSalespersonProps = {
  id: string;
};

type DeleteSalespersonReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleSalespersonsProps = {
  ids: string[];
};

type DeleteMultipleSalespersonsReturn = {
  success?: string;
  error?: string;
};

type FetchSalespersonsReturn = Salesperson[];

type UpdateSalespersonProps = {
  id: string;
  values: SalespersonSchema;
};

type UpdateSalespersonReturn = {
  salesperson?: Salesperson;
  error?: string;
  success?: string;
};

export type {
  CreateSalespersonProps,
  CreateSalespersonReturn,
  DeleteSalespersonProps,
  DeleteSalespersonReturn,
  DeleteMultipleSalespersonsProps,
  DeleteMultipleSalespersonsReturn,
  FetchSalespersonsReturn,
  UpdateSalespersonProps,
  UpdateSalespersonReturn,
};
