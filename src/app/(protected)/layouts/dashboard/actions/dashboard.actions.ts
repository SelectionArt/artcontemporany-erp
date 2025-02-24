"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Types
import type { FetchPricingsReturn } from "./types/dashboard.actions.types";

const fetchPricings = async (): Promise<FetchPricingsReturn> => {
  try {
    const sections = await prisma.pricing.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: { name: "asc" },
    });
    return sections;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { fetchPricings };
