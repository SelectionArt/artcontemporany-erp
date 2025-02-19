import type {
  FetchArtworksReturn,
  FetchFiltersReturn,
} from "../actions/types/artworks.actions.types";

type Artwork = FetchArtworksReturn[number];

type Filters = FetchFiltersReturn;

type ArtworksProps = {
  artworks: Artwork[];
  filters: Filters;
};

export type { Artwork, ArtworksProps };
