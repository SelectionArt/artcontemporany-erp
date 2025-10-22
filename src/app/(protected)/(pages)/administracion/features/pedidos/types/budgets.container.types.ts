import {
  FetchArtworksReturn,
  FetchBudgetsReturn,
  FetchClientsReturn,
  FetchFramesReturn,
  FetchPricingItemsReturn,
  FetchPricingsReturn,
  FetchSalespersonsReturn,
} from "../actions/types/budgets.actions.types";

type Artwork = FetchArtworksReturn[number];

type Budget = FetchBudgetsReturn[number];

type Client = FetchClientsReturn[number];

type Frame = FetchFramesReturn[number];

type PricingItem = FetchPricingItemsReturn[number];

type Pricing = FetchPricingsReturn[number];

type Salesperson = FetchSalespersonsReturn[number];

type BudgetsProps = {
  artworks: Artwork[];
  budgets: Budget[];
  clients: Client[];
  frames: Frame[];
  page: "budgets" | "orders";
  pricings: Pricing[];
  salespersons: Salesperson[];
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
