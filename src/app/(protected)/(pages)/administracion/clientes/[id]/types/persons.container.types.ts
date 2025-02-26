import { Person as PrismaPerson } from "@prisma/client";

type Person = Omit<PrismaPerson, "createdAt" | "updatedAt" | "artworks">;

type PersonsProps = {
  initialData: Person[];
};

export type { Person, PersonsProps };
