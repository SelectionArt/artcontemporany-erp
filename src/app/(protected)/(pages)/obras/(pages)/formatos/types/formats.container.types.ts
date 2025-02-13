import { Format as PrismaFormat } from "@prisma/client";

type Format = Omit<PrismaFormat, "createdAt" | "updatedAt" | "artworks">;

type FormatsProps = {
  initialData: Format[];
};

export type { Format, FormatsProps };
