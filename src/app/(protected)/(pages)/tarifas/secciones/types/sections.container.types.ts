import { Section as PrismaSection } from "@prisma/client";

type Section = Omit<PrismaSection, "createdAt" | "updatedAt">;

type SectionsProps = {
  initialData: Section[];
};

export type { Section, SectionsProps };
