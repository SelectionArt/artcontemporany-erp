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
  tag: string;
  title: string;
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
