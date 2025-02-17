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
        artist: artwork.artist,
        colors: artwork.colors.map((color) => color.color),
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
