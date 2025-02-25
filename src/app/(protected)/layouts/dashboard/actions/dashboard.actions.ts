"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Types
import type { FetchPricingsReturn } from "./types/dashboard.actions.types";

const fetchPricings = async (): Promise<FetchPricingsReturn> => {
  try {
    const pricings = await prisma.pricing.findMany({
      select: {
        id: true,
        name: true,
        type: true,
      },
      orderBy: { name: "asc" },
    });
    return pricings;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { fetchPricings };
