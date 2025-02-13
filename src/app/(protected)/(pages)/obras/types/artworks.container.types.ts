import type { Artwork as PrismaArtwork } from "@prisma/client";
import type { Artist } from "@/app/(protected)/(pages)/artistas/types/artists.container.types";
import type { Color } from "@/app/(protected)/(pages)/obras/(pages)/colores/types/colors.container.types";
import type { Finish } from "@/app/(protected)/(pages)/obras/(pages)/acabados/types/finishes.container.types";
import type { Format } from "@/app/(protected)/(pages)/obras/(pages)/formatos/types/formats.container.types";
import type { Style } from "@/app/(protected)/(pages)/obras/(pages)/estilos/types/styles.container.types";
import type { Support } from "@/app/(protected)/(pages)/obras/(pages)/soportes/types/supports.container.types";

type Artwork = Omit<PrismaArtwork, "createdAt" | "updatedAt">;

type ArtworksProps = {
  artists: Artist[];
  colors: Color[];
  finishes: Finish[];
  formats: Format[];
  initialData: Artwork[];
  styles: Style[];
  supports: Support[];
};

export type { Artwork, ArtworksProps };
