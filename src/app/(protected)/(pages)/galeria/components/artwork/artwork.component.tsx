// Vendors
import Image from "next/image";
import Link from "next/link";
// Types
import type { ArtworkProps } from "./types/artwork.component.types";

const Artwork = ({ artwork }: ArtworkProps) => {
  return (
    <div className="flex flex-col rounded-lg border">
      <div className="relative h-48">
        <Image
          src={artwork.images[0]?.url}
          alt={artwork.title}
          fill
          className="w-full rounded-t-lg object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col px-4 py-3">
        <h3 className="text-lg font-semibold">{artwork.title}</h3>
        <p className="text-muted-foreground text-sm">{artwork.artist?.name}</p>
      </div>
      <div className="flex h-10 justify-center border-t">
        <Link
          className="flex items-center self-stretch px-4 text-sm"
          href={`/galeria/${artwork.id}`}
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export { Artwork };
