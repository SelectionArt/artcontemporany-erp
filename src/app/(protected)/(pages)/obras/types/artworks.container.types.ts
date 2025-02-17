import type {
  Artist,
  Color,
  Finish,
  Format,
  Image,
  Style,
  Support,
} from "@prisma/client";
import type { FetchArtworksReturn } from "../actions/types/artworks.actions.types";

type Artwork = FetchArtworksReturn[0];

type ArtworksProps = {
  artworks: Artwork[];
  filters: {
    artists: Artist[];
    colors: Color[];
    finishes: Finish[];
    formats: Format[];
    styles: Style[];
    supports: Support[];
  };
};

export type { Artwork, ArtworksProps };
