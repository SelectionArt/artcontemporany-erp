// Types
import type { Artwork } from "../../../types/gallery.container.types";

type ArtworkProps = {
  artwork: Artwork;
  onSelect: ({
    artwork,
    checked,
  }: {
    artwork: Artwork;
    checked: string | boolean;
  }) => void;
};

export type { ArtworkProps };
