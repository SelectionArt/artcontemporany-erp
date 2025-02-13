import { Finish as PrismaFinish } from "@prisma/client";

type Finish = Omit<PrismaFinish, "createdAt" | "updatedAt" | "artworks">;

type FinishesProps = {
  initialData: Finish[];
};

export type { Finish, FinishesProps };
