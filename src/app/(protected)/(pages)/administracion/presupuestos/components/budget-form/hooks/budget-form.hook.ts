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

  const clientId = form.watch("clientId");
  const items = form.watch("items") || [];

  const artworksValues = (index: number) => {
    const searchValue = form.watch(`items.${index}.artworkId`) || "";

    const selectedArtwork = artworks.find(
      (artwork) => artwork.id === searchValue,
    );

    const filteredArtworks = artworks
      .filter((artwork) =>
        `${artwork.referenceNumber}-${artwork.referenceCode}`
          .toLowerCase()
          .includes(form.watch(`items.${index}.artworkId`).toLowerCase() || ""),
      )
      .slice(0, 10)
      .map((artwork) => ({
        value: artwork.id,
        label: `${artwork.referenceNumber}-${artwork.referenceCode}`,
      }));

    return selectedArtwork
      ? [
          {
            value: selectedArtwork.id,
            label: `${selectedArtwork.referenceNumber}-${selectedArtwork.referenceCode}`,
          },
          ...filteredArtworks,
        ]
      : filteredArtworks;
  };

  const clientsValues = clients
    .filter((client) =>
      client.name
        .toLowerCase()
        .includes(
          clients.find((c) => c.id === clientId)?.name.toLowerCase() || "",
        ),
    )
    .slice(0, 10)
    .map((client) => ({
      value: client.id,
      label: client.name,
    }));

  const framesValues = (index: number) => {
    const searchValue = form.watch(`items.${index}.frameId`) || "";

    const selectedFrame = frames.find((frame) => frame.id === searchValue);

    const filteredFrames = frames
      .filter((frame) =>
        frame.reference
          .toLowerCase()
          .includes((form.watch(`items.${index}.frameId`) ?? "").toLowerCase()),
      )
      .slice(0, 10)
      .map((frame) => ({
        value: frame.id,
        label: frame.reference,
      }));

    return selectedFrame
      ? [
          { value: selectedFrame.id, label: selectedFrame.reference },
          ...filteredFrames,
        ]
      : filteredFrames;
  };

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

  const total = items.reduce(
    (acc, { artworkPrice, framePrice, quantity }) =>
      acc + artworkPrice * quantity + (framePrice ?? 0) * quantity,
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
    setIsCalendarOpen,
    total,
  };
};

export { BudgetsHook };
