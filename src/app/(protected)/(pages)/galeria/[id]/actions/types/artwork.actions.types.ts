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
};

export type { FetchArtworkProps, FetchArtworkReturn };
