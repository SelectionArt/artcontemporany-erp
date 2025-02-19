"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Types
import type {
  FetchFrameProps,
  FetchFrameReturn,
} from "./types/frame.actions.types";

const fetchFrame = async ({
  id,
}: FetchFrameProps): Promise<FetchFrameReturn | null> => {
  try {
    const frame = await prisma.frame.findUnique({
      where: { id },
      include: {
        images: true,
        manufacturer: true,
        material: true,
      },
    });

    if (!frame) {
      return null;
    }

    return {
      id: frame.id,
      name: frame.name,
      description: frame.description ?? "",
      reference: frame.reference,
      width: frame.width,
      height: frame.height,
      galce: frame.galce,
      images: frame.images,
      manufacturer: frame.manufacturer,
      material: frame.material,
      createdAt: frame.createdAt,
      updatedAt: frame.updatedAt,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchFrame };
