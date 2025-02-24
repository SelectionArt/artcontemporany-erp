// Types
import type { Pricing } from "@prisma/client";

type FetchPricingsReturn = Omit<Pricing, "createdAt" | "updatedAt">[];

export type { FetchPricingsReturn };
