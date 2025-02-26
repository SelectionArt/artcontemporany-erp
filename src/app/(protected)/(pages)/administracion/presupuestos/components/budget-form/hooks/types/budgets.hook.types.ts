// Types
import type { Dispatch, SetStateAction } from "react";
import type {
  Artwork,
  Client,
  Frame,
} from "../../../../types/budgets.container.types";
import type { BudgetFormHandlersReturn } from "../../handlers/types/budget-form.handlers.types";
import type { UseFormReturn } from "react-hook-form";
import type { BudgetSchema } from "../../../../schemas/types/budget.schema.types";

type BudgetsHookProps = {
  artworks: Artwork[];
  clients: Client[];
  form: UseFormReturn<BudgetSchema>;
  frames: Frame[];
};

type Item = { value: string; label: string };

type BudgetsHookReturn = BudgetFormHandlersReturn & {
  artworksValues: (index: number) => Item[];
  artworkTotalPrice: (index: number) => number;
  clientsValues: Item[];
  framesValues: (index: number) => Item[];
  frameTotalPrice: (index: number) => number;
  isCalendarOpen: boolean;
  setIsCalendarOpen: Dispatch<SetStateAction<boolean>>;
  total: number;
};

export type { BudgetsHookProps, BudgetsHookReturn };
