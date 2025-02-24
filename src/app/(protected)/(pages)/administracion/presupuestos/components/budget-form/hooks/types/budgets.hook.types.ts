// Types
import type { Dispatch, SetStateAction } from "react";
import type {
  Artwork,
  Client,
  Frame,
} from "../../../../types/budgets.container.types";
import type { BudgetFormHandlersReturn } from "../../handlers/types/budget-form.handlers.types";
import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import type { BudgetSchema } from "../../../../schemas/types/budget.schema.types";

type BudgetsHookProps = {
  artworks: Artwork[];
  clients: Client[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
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
  searchValues: Record<number, { artwork: string; frame: string }>;
  setIsCalendarOpen: Dispatch<SetStateAction<boolean>>;
  setSearchArtwork: (index: number, value: string) => void;
  setSearchFrame: (index: number, value: string) => void;
  searchClient: string;
  setSearchClient: Dispatch<SetStateAction<string>>;
  total: number;
};

export type { BudgetsHookProps, BudgetsHookReturn };
