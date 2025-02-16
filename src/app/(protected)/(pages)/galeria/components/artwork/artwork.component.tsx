// Vendors
import Image from "next/image";
// Types
import type { ArtworkProps } from "./types/artwork.component.types";

const Artwork = ({ artwork }: ArtworkProps) => {
  return (
    <div className="bg">
      <div className="relative h-48">
        <Image
          src={artwork.images[0]?.url}
          alt={artwork.title}
          fill
          className="w-full rounded-md object-cover"
        />
      </div>
      <h3 className="mt-2 text-lg font-semibold">{artwork.title}</h3>
      <p className="text-muted-foreground text-sm">{artwork.artist?.name}</p>
    </div>
  );
};

export { Artwork };
