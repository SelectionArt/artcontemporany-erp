// Types
import type { Section } from "@prisma/client";

type FetchSectionsReturn = Omit<Section, "createdAt" | "updatedAt">[];

export type { FetchSectionsReturn };
