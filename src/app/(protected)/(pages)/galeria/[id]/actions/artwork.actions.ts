"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Types
import type {
  FetchArtworkProps,
  FetchArtworkReturn,
} from "./types/artwork.actions.types";

const fetchArtwork = async ({
  id,
}: FetchArtworkProps): Promise<FetchArtworkReturn | null> => {
  try {
    const artwork = await prisma.artwork.findUnique({
      where: { id },
      include: {
        artist: true,
        colors: {
          include: {
            color: true,
          },
        },
        finish: true,
        format: true,
        style: true,
        support: true,
        images: true,
      },
    });

    if (!artwork) {
      return null;
    }

    return {
      artist: artwork.artist,
      colors: artwork.colors.map(({ color }) => ({
        id: color.id,
        name: color.name,
        createdAt: color.createdAt,
        updatedAt: color.updatedAt,
        hex: color.hex,
      })),
      createdAt: artwork.createdAt,
      finish: artwork.finish,
      format: artwork.format,
      height: artwork.height,
      id: artwork.id,
      images: artwork.images,
      referenceCode: artwork.referenceCode ?? "",
      referenceNumber: artwork.referenceNumber,
      style: artwork.style,
      support: artwork.support,
      title: artwork.title ?? "",
      updatedAt: artwork.updatedAt,
      width: artwork.width,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchArtwork };
