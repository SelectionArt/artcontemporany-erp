// Types
import type { Artwork } from "../../types/artworks.container.types";
import type { ArtworkSchema } from "../../schemas/types/artwork.schema.types";

type CreateArtworkProps = {
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

type FetchArtworksReturn = Artwork[];

type UpdateArtworkProps = {
  id: string;
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
  UpdateArtworkProps,
  UpdateArtworkReturn,
};
