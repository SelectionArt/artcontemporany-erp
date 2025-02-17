import {
  Artist,
  Color,
  Finish,
  Format,
  Image,
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
    images: Image[];
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
