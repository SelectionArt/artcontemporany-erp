import { Style as PrismaStyle } from "@prisma/client";

type Style = Omit<PrismaStyle, "createdAt" | "updatedAt" | "artworks">;

type StylesProps = {
  initialData: Style[];
};

export type { Style, StylesProps };
