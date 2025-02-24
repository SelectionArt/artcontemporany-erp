import { PricingItem as PrismaPricingItem } from "@prisma/client";

type Pricing = Omit<PrismaPricingItem, "createdAt" | "updatedAt">;

type PricingsProps = {
  initialData: PrismaPricingItem[];
};

export type { Pricing, PricingsProps };
