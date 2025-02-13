import { Support as PrismaSupport } from "@prisma/client";

type Support = Omit<PrismaSupport, "createdAt" | "updatedAt" | "artworks">;

type SupportsProps = {
  initialData: Support[];
};

export type { Support, SupportsProps };
