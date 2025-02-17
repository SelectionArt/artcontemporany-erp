// Vendors
import Image from "next/image";
import Link from "next/link";
// Components
import { Badge } from "@/components/ui/badge";
// Types
import type { ArtworkProps } from "./types/artwork.component.types";

const Artwork = ({ artwork }: ArtworkProps) => {
  return (
    <Link
      className="flex flex-col rounded-lg border"
      href={`/galeria/${artwork.id}`}
    >
      <div className="relative h-60">
        <Image
          src={artwork.images[0]?.url}
          alt={artwork.title}
          fill
          className="w-full rounded-t-lg object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 py-3">
        <div className="flex justify-between gap-2">
          <h3 className="text-lg font-semibold">{artwork.title}</h3>
          <p className="text-muted-foreground text-sm">
            {artwork.referenceNumber}-{artwork.referenceCode}
          </p>
        </div>

        <div className="flex justify-between gap-2">
          <p className="text-muted-foreground text-sm">
            {artwork.artist?.name}
          </p>
          <Badge
            className="text-muted-foreground flex items-center gap-2 rounded-full text-sm font-medium"
            variant="outline"
          >
            {artwork.width} x {artwork.height} cm
          </Badge>
        </div>
      </div>
    </Link>
  );
};

export { Artwork };
