// Types
import type {
  Artwork,
  Budget,
  BudgetItem,
  Client,
  Frame,
  Pricing,
  PricingItem,
} from "@prisma/client";
import type { BudgetSchema } from "../../schemas/types/budget.schema.types";

type CreateBudgetProps = {
  values: BudgetSchema;
};

type CreateBudgetReturn = {
  budget?: Pick<Budget, "id" | "date" | "number" | "validity" | "clientId"> & {
    client: Pick<Client, "id" | "name">;
    observations: string;
    reference: string;
    items: Array<
      Pick<
        BudgetItem,
        | "artworkId"
        | "artworkPrice"
        | "artworkPricingId"
        | "frameId"
        | "framePrice"
        | "framePricingId"
        | "height"
        | "width"
        | "quantity"
      > & {
        observations: string;
      }
    >;
  };
  error?: string;
  success?: string;
};

type DeleteBudgetProps = {
  id: string;
};

type DeleteBudgetReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleBudgetsProps = {
  ids: string[];
};

type DeleteMultipleBudgetsReturn = {
  success?: string;
  error?: string;
};

type FetchArtworksReturn = Pick<
  Artwork,
  "id" | "referenceNumber" | "referenceCode"
>[];

type FetchBudgetsReturn = Array<
  Pick<Budget, "id" | "date" | "number" | "validity" | "clientId"> & {
    client: Pick<Client, "id" | "name">;
    observations: string;
    reference: string;
    items: Array<
      Pick<
        BudgetItem,
        | "artworkId"
        | "artworkPrice"
        | "artworkPricingId"
        | "frameId"
        | "framePrice"
        | "framePricingId"
        | "height"
        | "width"
        | "quantity"
      > & {
        observations: string;
      }
    >;
  }
>;

type FetchClientsReturn = Pick<Client, "id" | "name">[];

type FetchFramesReturn = Pick<Frame, "id" | "reference">[];

type FetchPricingItemsProps = {
  id: string;
};

type FetchPricingItemsReturn = Pick<
  PricingItem,
  "id" | "height" | "price" | "width"
>[];

type FetchPricingsReturn = Pick<Pricing, "id" | "name">[];

type UpdateBudgetProps = {
  id: string;
  values: BudgetSchema;
};

type UpdateBudgetReturn = {
  budget?: Pick<Budget, "id" | "date" | "number" | "validity" | "clientId"> & {
    client: Pick<Client, "id" | "name">;
    observations: string;
    reference: string;
    items: Array<
      Pick<
        BudgetItem,
        | "artworkId"
        | "artworkPrice"
        | "artworkPricingId"
        | "frameId"
        | "framePrice"
        | "framePricingId"
        | "height"
        | "width"
        | "quantity"
      > & {
        observations: string;
      }
    >;
  };
  error?: string;
  success?: string;
};

export type {
  CreateBudgetProps,
  CreateBudgetReturn,
  DeleteBudgetProps,
  DeleteBudgetReturn,
  DeleteMultipleBudgetsProps,
  DeleteMultipleBudgetsReturn,
  FetchArtworksReturn,
  FetchBudgetsReturn,
  FetchClientsReturn,
  FetchFramesReturn,
  FetchPricingItemsProps,
  FetchPricingItemsReturn,
  FetchPricingsReturn,
  UpdateBudgetProps,
  UpdateBudgetReturn,
};
