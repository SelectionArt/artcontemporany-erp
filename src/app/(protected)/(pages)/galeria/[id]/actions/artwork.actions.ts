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
        color: true,
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
      id: artwork.id,
      title: artwork.title ?? "",
      referenceNumber: artwork.referenceNumber,
      referenceCode: artwork.referenceCode ?? "",
      width: artwork.width,
      height: artwork.height,
      createdAt: artwork.createdAt,
      updatedAt: artwork.updatedAt,
      artist: artwork.artist,
      color: artwork.color,
      finish: artwork.finish,
      format: artwork.format,
      style: artwork.style,
      support: artwork.support,
      images: artwork.images,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchArtwork };
