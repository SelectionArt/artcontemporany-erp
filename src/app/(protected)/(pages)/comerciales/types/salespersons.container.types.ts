import { Salesperson as PrismaSalesperson } from "@prisma/client";

type Salesperson = Omit<
  PrismaSalesperson,
  "createdAt" | "updatedAt" | "artworks"
>;

type SalespersonsProps = {
  initialData: Salesperson[];
};

export type { Salesperson, SalespersonsProps };
