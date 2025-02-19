import type { FetchGalleryReturn } from "../actions/types/gallery.actions.types";

type Artworks = FetchGalleryReturn["artworks"];

type Artwork = Artworks[number];

type GalleryProps = {
  gallery: FetchGalleryReturn;
};

export type { Artwork, Artworks, GalleryProps };
