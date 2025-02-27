import {
  Artist,
  Color,
  Finish,
  Format,
  ArtworkImage,
  Style,
  Support,
} from "@prisma/client";

type FetchGalleryReturn = {
  artworks: {
    artist: Pick<Artist, "id" | "name">;
    colors: Pick<Color, "id" | "name" | "hex">[];
    finish: Pick<Finish, "id" | "name"> | null;
    format: Pick<Format, "id" | "name"> | null;
    height: number;
    id: string;
    images: Pick<ArtworkImage, "id" | "url">[];
    referenceCode: string;
    referenceNumber: number;
    style: Pick<Style, "id" | "name"> | null;
    support: Pick<Support, "id" | "name"> | null;
    title: string;
    width: number;
  }[];
  filters: {
    artists: Pick<Artist, "id" | "name">[];
    colors: Pick<Color, "id" | "name" | "hex">[];
    finishes: Pick<Finish, "id" | "name">[];
    formats: Pick<Format, "id" | "name">[];
    styles: Pick<Style, "id" | "name">[];
    supports: Pick<Support, "id" | "name">[];
  };
};

export type { FetchGalleryReturn };
