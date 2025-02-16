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
    id: string;
    title: string;
    referenceNumber: number;
    referenceCode: string;
    width: number;
    height: number;
    createdAt: Date;
    updatedAt: Date;
    artist: Artist;
    color: Color | null;
    finish: Finish | null;
    format: Format | null;
    style: Style | null;
    support: Support | null;
    images: Image[];
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
