import {
  Artist,
  Color,
  Finish,
  Format,
  Image,
  Style,
  Support,
} from "@prisma/client";

type FetchArtworkProps = {
  id: string;
};

type FetchArtworkReturn = {
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
};

export type { FetchArtworkProps, FetchArtworkReturn };
