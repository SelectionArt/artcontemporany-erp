import { Salesperson as PrismaSalesperson } from "@prisma/salesperson";

type Salesperson = Omit<
  PrismaSalesperson,
  "createdAt" | "updatedAt" | "artworks"
>;

type SalespersonsProps = {
  initialData: Salesperson[];
};

export type { Salesperson, SalespersonsProps };
