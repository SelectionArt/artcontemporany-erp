import { Pricing as PrismaPricing } from "@prisma/client";

type Pricing = Omit<PrismaPricing, "createdAt" | "updatedAt">;

type PricingsProps = {
  initialData: Pricing[];
};

export type { Pricing, PricingsProps };
