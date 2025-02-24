"use client";
// Vendors
import { useState } from "react";
// Handlers
import { BudgetFormHandlers } from "../handlers/budget-form.handlers";
// Types
import type {
  BudgetsHookProps,
  BudgetsHookReturn,
} from "./types/budgets.hook.types";
import type { PricingItem } from "../../../types/budgets.container.types";

const BudgetsHook = ({
  artworks,
  clients,
  fieldArray,
  form,
  frames,
}: BudgetsHookProps): BudgetsHookReturn => {
  const [artworkPricingItems, setArtworkPricingItems] = useState<
    Record<string, PricingItem[]>
  >({});
  const [framePricingItems, setFramePricingItems] = useState<
    Record<string, PricingItem[]>
  >({});
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [searchClient, setSearchClient] = useState<string>("");
  const [searchValues, setSearchValues] = useState<
    Record<number, { artwork: string; frame: string }>
  >({});

  const setSearchArtwork = (index: number, value: string) => {
    setSearchValues((prev) => ({
      ...prev,
      [index]: { ...prev[index], artwork: value },
    }));
  };

  const setSearchFrame = (index: number, value: string) => {
    setSearchValues((prev) => ({
      ...prev,
      [index]: { ...prev[index], frame: value },
    }));
  };

  const artworksValues = (index: number) =>
    artworks
      .filter((artwork) =>
        `${artwork.referenceNumber}-${artwork.referenceCode}`
          .toString()
          .toLowerCase()
          .includes(searchValues[index]?.artwork?.toLowerCase() || ""),
      )
      .slice(0, 10)
      .map((artwork) => ({
        value: artwork.id,
        label: `${artwork.referenceNumber}-${artwork.referenceCode}`,
      }));

  const clientsValues = clients
    .filter((client) =>
      client.name.toString().toLowerCase().includes(searchClient.toLowerCase()),
    )
    .slice(0, 10)
    .map((client) => ({
      value: client.id,
      label: client.name,
    }));

  const framesValues = (index: number) =>
    frames
      .filter((frame) =>
        frame.reference
          .toString()
          .toLowerCase()
          .includes(searchValues[index]?.frame?.toLowerCase() || ""),
      )
      .slice(0, 10)
      .map((frame) => ({
        value: frame.id,
        label: frame.reference,
      }));

  const artworkTotalPrice = (index: number) => {
    const [artworkPrice, quantity] = form
      .watch([`items.${index}.artworkPrice`, `items.${index}.quantity`])
      .map(Number);
    return artworkPrice * quantity;
  };

  const frameTotalPrice = (index: number) => {
    const [framePrice, quantity] = form
      .watch([`items.${index}.framePrice`, `items.${index}.quantity`])
      .map(Number);
    return framePrice * quantity;
  };

  const total = form
    .getValues()
    .items.reduce(
      (acc: number, { artworkPrice, framePrice, quantity }: any) =>
        acc + artworkPrice * quantity + framePrice * quantity,
      0,
    );

  const {
    handleArtworkPricingsValueChange,
    handleFramePricingsValueChange,
    handleHeightValueChange,
    handleWidthValueChange,
  } = BudgetFormHandlers({
    artworkPricingItems,
    form,
    framePricingItems,
    setArtworkPricingItems,
    setFramePricingItems,
  });

  return {
    artworksValues,
    artworkTotalPrice,
    clientsValues,
    framesValues,
    frameTotalPrice,
    handleArtworkPricingsValueChange,
    handleFramePricingsValueChange,
    handleHeightValueChange,
    handleWidthValueChange,
    isCalendarOpen,
    searchClient,
    searchValues,
    setIsCalendarOpen,
    setSearchArtwork,
    setSearchClient,
    setSearchFrame,
    total,
  };
};

export { BudgetsHook };
