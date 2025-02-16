// Types
import type { FetchGalleryReturn } from "../../../actions/types/gallery.actions.types";

type ArtworkProps = {
  artwork: FetchGalleryReturn["artworks"][number];
};

export type { ArtworkProps };