import { Color as PrismaColor } from "@prisma/client";

type Color = Omit<PrismaColor, "createdAt" | "updatedAt" | "artworks">;

type ColorsProps = {
  initialData: Color[];
};

export type { Color, ColorsProps };
