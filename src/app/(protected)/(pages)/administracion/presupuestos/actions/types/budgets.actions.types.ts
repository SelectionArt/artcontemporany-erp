// Types
import type {
  Budget,
  BudgetItem,
  BudgetSignature,
  Client,
  Pricing,
  PricingItem,
} from "@prisma/client";
import type { BudgetSchema } from "../../schemas/types/budget.schema.types";

type CreateBudgetProps = {
  values: BudgetSchema;
};

type CreateBudgetReturn = {
  budget?: Pick<
    Budget,
    | "id"
    | "date"
    | "number"
    | "validity"
    | "clientId"
    | "discount"
    | "transport"
    | "tax"
    | "paymentMethod"
    | "status"
    | "showIBAN"
    | "createdAt"
    | "updatedAt"
  > & {
    client: Pick<Client, "id" | "name">;
    observations: string;
    reference: string;
    sendAddress: string;
    items: Array<
      Pick<
        BudgetItem,
        | "artworkId"
        | "artworkPrice"
        | "artworkPricingId"
        | "framePrice"
        | "height"
        | "width"
        | "quantity"
      > & {
        frameId: string;
        framePricingId: string;
        observations: string;
      }
    >;
    signature: Pick<BudgetSignature, "imageUrl"> | null;
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

type FetchArtworksReturn = Array<{
  id: string;
  referenceNumber: number;
  referenceCode: string | null;
  imageUrl: string | null;
}>;

type FetchBudgetsReturn = Array<
  Pick<
    Budget,
    | "id"
    | "date"
    | "number"
    | "validity"
    | "clientId"
    | "discount"
    | "transport"
    | "tax"
    | "paymentMethod"
    | "status"
    | "showIBAN"
    | "createdAt"
    | "updatedAt"
  > & {
    client: Pick<Client, "id" | "name">;
    observations: string;
    reference: string;
    sendAddress: string;
    items: Array<
      Pick<
        BudgetItem,
        | "artworkId"
        | "artworkPrice"
        | "artworkPricingId"
        | "framePrice"
        | "height"
        | "width"
        | "quantity"
      > & {
        frameId: string;
        framePricingId: string;
        observations: string;
      }
    >;
    signature: Pick<BudgetSignature, "imageUrl"> | null;
  }
>;

type FetchClientsReturn = Pick<Client, "id" | "name" | "legalName" | "cif">[];

type FetchFramesReturn = Array<{
  id: string;
  reference: string;
  imageUrl: string | null;
}>;

type FetchPricingItemsProps = {
  id: string;
};

type FetchPricingItemsReturn = Pick<
  PricingItem,
  "id" | "height" | "price" | "width"
>[];

type FetchPricingsReturn = Pick<Pricing, "id" | "name" | "type">[];

type GeneratePDFProps = {
  id: string;
  type: "budget" | "invoice" | "deliveryNote" | "orderConfirmation";
};

type GeneratePDFReturn = {
  pdf: Uint8Array;
  fileName: string;
};

type SignBudgetProps = {
  id: string;
  signature: string;
};

type UpdateBudgetProps = {
  id: string;
  values: BudgetSchema;
};

type UpdateBudgetReturn = {
  budget?: Pick<
    Budget,
    | "id"
    | "date"
    | "number"
    | "validity"
    | "clientId"
    | "discount"
    | "transport"
    | "tax"
    | "paymentMethod"
    | "status"
    | "showIBAN"
    | "createdAt"
    | "updatedAt"
  > & {
    client: Pick<Client, "id" | "name">;
    observations: string;
    reference: string;
    sendAddress: string;
    items: Array<
      Pick<
        BudgetItem,
        | "artworkId"
        | "artworkPrice"
        | "artworkPricingId"
        | "framePrice"
        | "height"
        | "width"
        | "quantity"
      > & {
        frameId: string;
        framePricingId: string;
        observations: string;
      }
    >;
    signature: Pick<BudgetSignature, "imageUrl"> | null;
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
  GeneratePDFProps,
  GeneratePDFReturn,
  SignBudgetProps,
  UpdateBudgetProps,
  UpdateBudgetReturn,
};
