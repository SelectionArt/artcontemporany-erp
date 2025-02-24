// Types
import type {
  Artwork,
  Client,
  Frame,
  Pricing,
} from "../../../types/budgets.container.types";
import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import type { BudgetSchema } from "../../../schemas/types/budget.schema.types";

type BudgetFormProps = {
  artworks: Artwork[];
  clients: Client[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
  form: UseFormReturn<BudgetSchema>;
  frames: Frame[];
  handleSubmit: (values: BudgetSchema) => void;
  label: string;
  loading: boolean;
  pricings: Pricing[];
};

export type { BudgetFormProps };
