import {
  Artist,
  Color,
  Finish,
  Format,
  ArtworkImage,
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
  images: ArtworkImage[];
  referenceCode: string;
  referenceNumber: number;
  style: Style | null;
  support: Support | null;
  title: string;
  updatedAt: Date;
  width: number;
};

export type { FetchArtworkProps, FetchArtworkReturn };
