// Types
import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import type { PricingItem } from "../../../../types/budgets.container.types";
import type { BudgetSchema } from "../../../../schemas/types/budget.schema.types";

type BudgetFormHandlersProps = {
  artworkPricingItems: Record<string, PricingItem[]>;
  framePricingItems: Record<string, PricingItem[]>;
  form: UseFormReturn<BudgetSchema>;
  setArtworkPricingItems: Dispatch<
    SetStateAction<Record<string, PricingItem[]>>
  >;
  setFramePricingItems: Dispatch<SetStateAction<Record<string, PricingItem[]>>>;
};

type BudgetFormHandlersReturn = {
  handleArtworkPricingsValueChange: ({
    field,
    index,
    value,
  }: {
    field: ControllerRenderProps<
      BudgetSchema,
      `items.${number}.artworkPricingId`
    >;
    index: number;
    value: string;
  }) => void;
  handleFramePricingsValueChange: ({
    field,
    index,
    value,
  }: {
    field: ControllerRenderProps<
      BudgetSchema,
      `items.${number}.framePricingId`
    >;
    index: number;
    value: string;
  }) => void;
  handleHeightValueChange: ({
    event,
    field,
    index,
  }: {
    event: ChangeEvent<HTMLInputElement>;
    field: ControllerRenderProps<BudgetSchema, `items.${number}.height`>;
    index: number;
  }) => void;
  handleWidthValueChange: ({
    event,
    field,
    index,
  }: {
    event: ChangeEvent<HTMLInputElement>;
    field: ControllerRenderProps<BudgetSchema, `items.${number}.width`>;
    index: number;
  }) => void;
};

type ArtworkPricingsValueChangeHandlerProps = Pick<
  BudgetFormHandlersProps,
  "setArtworkPricingItems"
> & {
  field: ControllerRenderProps<
    BudgetSchema,
    `items.${number}.artworkPricingId`
  >;
  form: UseFormReturn<BudgetSchema>;
  framePricingItems: Record<string, PricingItem[]>;
  index: number;
  value: string;
};

type HeightValueChangeHandlerProps = {
  artworkPricingItems: Record<string, PricingItem[]>;
  event: ChangeEvent<HTMLInputElement>;
  field: ControllerRenderProps<BudgetSchema, `items.${number}.height`>;
  form: UseFormReturn<BudgetSchema>;
  framePricingItems: Record<string, PricingItem[]>;
  index: number;
};

type FramePricingsValueChangeHandlerProps = Pick<
  BudgetFormHandlersProps,
  "setFramePricingItems"
> & {
  artworkPricingItems: Record<string, PricingItem[]>;
  field: ControllerRenderProps<BudgetSchema, `items.${number}.framePricingId`>;
  form: UseFormReturn<BudgetSchema>;
  index: number;
  value: string;
};

type WidthValueChangeHandlerProps = {
  artworkPricingItems: Record<string, PricingItem[]>;
  event: ChangeEvent<HTMLInputElement>;
  field: ControllerRenderProps<BudgetSchema, `items.${number}.width`>;
  form: UseFormReturn<BudgetSchema>;
  framePricingItems: Record<string, PricingItem[]>;
  index: number;
};

export type {
  ArtworkPricingsValueChangeHandlerProps,
  BudgetFormHandlersProps,
  BudgetFormHandlersReturn,
  HeightValueChangeHandlerProps,
  FramePricingsValueChangeHandlerProps,
  WidthValueChangeHandlerProps,
};
