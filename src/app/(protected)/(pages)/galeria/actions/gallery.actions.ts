"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Types
import type { FetchGalleryReturn } from "./types/gallery.actions.types";

const fetchGallery = async (): Promise<FetchGalleryReturn> => {
  try {
    const [artworks, artists, colors, finishes, formats, styles, supports] =
      await Promise.all([
        prisma.artwork.findMany({
          orderBy: { createdAt: "desc" },
          include: {
            artist: true,
            color: true,
            finish: true,
            format: true,
            style: true,
            support: true,
            images: true,
          },
        }),
        prisma.artist.findMany(),
        prisma.color.findMany(),
        prisma.finish.findMany(),
        prisma.format.findMany(),
        prisma.style.findMany(),
        prisma.support.findMany(),
      ]);

    return {
      artworks: artworks.map((artwork) => ({
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
      })),
      filters: {
        artists,
        colors,
        finishes,
        formats,
        styles,
        supports,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      artworks: [],
      filters: {
        artists: [],
        colors: [],
        finishes: [],
        formats: [],
        styles: [],
        supports: [],
      },
    };
  }
};

export { fetchGallery };
