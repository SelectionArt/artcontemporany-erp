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
    artist: Artist;
    colors: Color[];
    createdAt: Date;
    finish: Finish | null;
    format: Format | null;
    height: number;
    id: string;
    images: ArtworkImage[];
    referenceCode: string;
    referenceNumber: number;
    style: Style | null;
    support: Support | null;
    title: string;
    updatedAt: Date;
    width: number;
  }[];
  filters: {
    artists: Artist[];
    colors: Color[];
    finishes: Finish[];
    formats: Format[];
    styles: Style[];
    supports: Support[];
  };
};

export type { FetchGalleryReturn };
