import { Frame as PrismaFrame } from "@prisma/client";

type Frame = Omit<PrismaFrame, "createdAt" | "updatedAt" | "artworks">;

type FramesProps = {
  initialData: Frame[];
};

export type { Frame, FramesProps };
