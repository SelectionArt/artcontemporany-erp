import { Material as PrismaMaterial } from "@prisma/client";

type Material = Omit<PrismaMaterial, "createdAt" | "updatedAt" | "frames">;

type MaterialsProps = {
  initialData: Material[];
};

export type { Material, MaterialsProps };
