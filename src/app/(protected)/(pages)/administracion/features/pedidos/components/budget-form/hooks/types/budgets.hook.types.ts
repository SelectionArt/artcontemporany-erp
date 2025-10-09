// Types
import type { Dispatch, SetStateAction } from "react";
import type { Client } from "../../../../types/budgets.container.types";
import type { UseFormReturn } from "react-hook-form";
import type { BudgetSchema } from "../../../../schemas/types/budget.schema.types";

type BudgetsHookProps = {
  clients: Client[];
  form: UseFormReturn<BudgetSchema>;
};

type Item = { value: string; label: string };

type BudgetsHookReturn = {
  clientsValues: Item[];
  isCalendarOpen: boolean;
  setIsCalendarOpen: Dispatch<SetStateAction<boolean>>;
  searchValueClient: string;
  setSearchValueClient: Dispatch<SetStateAction<string>>;
};

export type { BudgetsHookProps, BudgetsHookReturn };
