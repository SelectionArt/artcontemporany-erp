// Vendors
import Image from "next/image";
import Link from "next/link";
// Components
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
// Types
import type { ArtworkProps } from "./types/artwork.component.types";

const Artwork = ({ artwork, onSelect }: ArtworkProps) => {
  return (
    <div className="relative flex flex-col rounded-lg border">
      <div className="bg-background absolute top-2 right-2 z-50 flex size-12 items-center justify-center rounded-full">
        <Checkbox
          onCheckedChange={(checked) => onSelect({ artwork, checked })}
          className="h-6 w-6"
        />
      </div>
      <Link
        className="relative h-60"
        href={`/galeria/${artwork.id}`}
        target="_blank"
        prefetch={false}
      >
        <Image
          alt={artwork.title}
          className="w-full rounded-t-lg object-contain"
          fill
          unoptimized
          loading="lazy"
          priority={false}
          src={`https://res.cloudinary.com/dpj6kupra/image/upload/f_auto,q_auto,w_320,h_320,c_fit/v1/${artwork.images[0].publicId}`}
        />
      </Link>
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
    </div>
  );
};

export { Artwork };
