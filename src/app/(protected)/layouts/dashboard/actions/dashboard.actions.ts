"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Types
import type { FetchSectionsReturn } from "./types/dashboard.actions.types";

const fetchSections = async (): Promise<FetchSectionsReturn> => {
  try {
    const sections = await prisma.section.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
      },
      orderBy: { name: "asc" },
    });
    return sections;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { fetchSections };
