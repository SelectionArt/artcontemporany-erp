import { Client as PrismaClient } from "@prisma/client";

type Client = Omit<PrismaClient, "createdAt" | "updatedAt" | "artworks">;

type ClientsProps = {
  initialData: Client[];
};

export type { Client, ClientsProps };
