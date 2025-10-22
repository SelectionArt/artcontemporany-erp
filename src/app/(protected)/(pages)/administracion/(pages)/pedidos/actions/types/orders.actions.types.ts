// Types
import type {
  Budget,
  BudgetItem,
  BudgetSignature,
  Client,
} from "@prisma/client";

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
    | "surcharge"
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
        | "framePrice"
        | "height"
        | "width"
        | "quantity"
      > & {
        artworkPricingId: string;
        frameId: string;
        framePricingId: string;
        observations: string;
      }
    >;
    signature: Pick<BudgetSignature, "imageUrl"> | null;
  }
>;

export type { FetchBudgetsReturn };
