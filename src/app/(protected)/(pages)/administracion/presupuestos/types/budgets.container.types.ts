import {
  FetchArtworksReturn,
  FetchBudgetsReturn,
  FetchClientsReturn,
  FetchFramesReturn,
  FetchPricingItemsReturn,
  FetchPricingsReturn,
} from "../actions/types/budgets.actions.types";

type Artwork = FetchArtworksReturn[number];

type Budget = FetchBudgetsReturn[number];

type Client = FetchClientsReturn[number];

type Frame = FetchFramesReturn[number];

type PricingItem = FetchPricingItemsReturn[number];

type Pricing = FetchPricingsReturn[number];

type BudgetsProps = {
  artworks: Artwork[];
  budgets: Budget[];
  clients: Client[];
  frames: Frame[];
  pricings: Pricing[];
};

export type {
  Artwork,
  Budget,
  BudgetsProps,
  Client,
  Frame,
  PricingItem,
  Pricing,
};
