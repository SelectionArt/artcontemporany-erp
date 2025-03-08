"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Types
import type { FetchGalleryReturn } from "./types/gallery.actions.types";

const fetchGallery = async (): Promise<FetchGalleryReturn> => {
  try {
    const [artworks, artists, colors, finishes, formats, styles, supports] =
      await prisma.$transaction([
        prisma.artwork.findMany({
          orderBy: { createdAt: "desc" },
          select: {
            id: true,
            title: true,
            referenceCode: true,
            referenceNumber: true,
            height: true,
            tag: true,
            width: true,
            artist: {
              select: {
                id: true,
                name: true,
              },
            },
            colors: {
              select: {
                color: {
                  select: {
                    id: true,
                    name: true,
                    hex: true,
                  },
                },
              },
            },
            finish: {
              select: {
                id: true,
                name: true,
              },
            },
            format: {
              select: {
                id: true,
                name: true,
              },
            },
            style: {
              select: {
                id: true,
                name: true,
              },
            },
            support: {
              select: {
                id: true,
                name: true,
              },
            },
            images: {
              select: {
                id: true,
                url: true,
              },
            },
          },
        }),
        prisma.artist.findMany({
          select: {
            id: true,
            name: true,
          },
          orderBy: { name: "asc" },
        }),
        prisma.color.findMany({
          select: {
            id: true,
            name: true,
            hex: true,
          },
          orderBy: { name: "asc" },
        }),
        prisma.finish.findMany({
          select: {
            id: true,
            name: true,
          },
          orderBy: { name: "asc" },
        }),
        prisma.format.findMany({
          select: {
            id: true,
            name: true,
          },
          orderBy: { name: "asc" },
        }),
        prisma.style.findMany({
          select: {
            id: true,
            name: true,
          },
          orderBy: { name: "asc" },
        }),
        prisma.support.findMany({
          select: {
            id: true,
            name: true,
          },
          orderBy: { name: "asc" },
        }),
      ]);

    return {
      artworks: artworks.map((artwork) => ({
        artist: artwork.artist,
        colors: artwork.colors.map((color) => color.color),
        finish: artwork.finish,
        format: artwork.format,
        height: artwork.height,
        id: artwork.id,
        images: artwork.images,
        referenceCode: artwork.referenceCode ?? "",
        referenceNumber: artwork.referenceNumber,
        style: artwork.style,
        support: artwork.support,
        tag: artwork.tag ?? "",
        title: artwork.title ?? "",
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
