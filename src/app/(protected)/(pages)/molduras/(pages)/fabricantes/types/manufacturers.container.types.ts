import { Manufacturer as PrismaManufacturer } from "@prisma/client";

type Manufacturer = Omit<
  PrismaManufacturer,
  "createdAt" | "updatedAt" | "frames"
>;

type ManufacturersProps = {
  initialData: Manufacturer[];
};

export type { Manufacturer, ManufacturersProps };
