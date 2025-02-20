// Types
import type { Artwork } from "../../types/artworks.container.types";
import type { ArtworkSchema } from "../../schemas/types/artwork.schema.types";
import {
  Artist,
  Color,
  Finish,
  Format,
  ArtworkImage,
  Style,
  Support,
} from "@prisma/client";

type CreateArtworkProps = {
  newImages: File[];
  values: ArtworkSchema;
};

type CreateArtworkReturn = {
  artwork?: Artwork;
  error?: string;
  success?: string;
};

type DeleteArtworkProps = {
  id: string;
};

type DeleteArtworkReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleArtworksProps = {
  ids: string[];
};

type DeleteMultipleArtworksReturn = {
  success?: string;
  error?: string;
};

type FetchArtworksReturn = {
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
  tag: string;
  title: string;
  updatedAt: Date;
  width: number;
}[];

type FetchFiltersReturn = {
  artists: Artist[];
  colors: Color[];
  finishes: Finish[];
  formats: Format[];
  styles: Style[];
  supports: Support[];
};

type UpdateArtworkProps = {
  id: string;
  newImages: File[];
  toDelete: string[];
  values: ArtworkSchema;
};

type UpdateArtworkReturn = {
  artwork?: Artwork;
  error?: string;
  success?: string;
};

export type {
  CreateArtworkProps,
  CreateArtworkReturn,
  DeleteArtworkProps,
  DeleteArtworkReturn,
  DeleteMultipleArtworksProps,
  DeleteMultipleArtworksReturn,
  FetchArtworksReturn,
  FetchFiltersReturn,
  UpdateArtworkProps,
  UpdateArtworkReturn,
};
