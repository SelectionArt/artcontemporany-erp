// Types
import type { Artist } from "../../types/artists.container.types";
import type { ArtistSchema } from "../../schemas/types/artist.schema.types";

type CreateArtistProps = {
  values: ArtistSchema;
};

type CreateArtistReturn = {
  artist?: Artist;
  error?: string;
  success?: string;
};

type DeleteArtistProps = {
  id: string;
};

type DeleteArtistReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleArtistsProps = {
  ids: string[];
};

type DeleteMultipleArtistsReturn = {
  success?: string;
  error?: string;
};

type FetchArtistsReturn = Artist[];

type UpdateArtistProps = {
  id: string;
  values: ArtistSchema;
};

type UpdateArtistReturn = {
  artist?: Artist;
  error?: string;
  success?: string;
};

export type {
  CreateArtistProps,
  CreateArtistReturn,
  DeleteArtistProps,
  DeleteArtistReturn,
  DeleteMultipleArtistsProps,
  DeleteMultipleArtistsReturn,
  FetchArtistsReturn,
  UpdateArtistProps,
  UpdateArtistReturn,
};
