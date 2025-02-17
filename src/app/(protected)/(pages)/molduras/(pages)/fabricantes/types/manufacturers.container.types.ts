import { Manufacturer as PrismaManufacturer } from "@prisma/client";

type Manufacturer = Omit<
  PrismaManufacturer,
  "createdAt" | "updatedAt" | "artworks"
>;

type ManufacturersProps = {
  initialData: Manufacturer[];
};

export type { Manufacturer, ManufacturersProps };
