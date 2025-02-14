import type { Artwork as PrismaArtwork } from "@prisma/client";
import type { Artist } from "../(pages)/artistas/types/artists.container.types";
import type { Color } from "../(pages)/colores/types/colors.container.types";
import type { Finish } from "../(pages)/acabados/types/finishes.container.types";
import type { Format } from "../(pages)/formatos/types/formats.container.types";
import type { Style } from "../(pages)/estilos/types/styles.container.types";
import type { Support } from "../(pages)/soportes/types/supports.container.types";

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
// Cristal 37  Lienzo 37  Tablero 0

//  Abstracto 63  Figurativo 10  Monocromático 0  Paisaje 1

//    Acrílico 11  Acrílico con textura 21  Collage 6  Técnica Mixta 43

//    Cuadrado 31  Díptico 0  Horizontal 1  Vertical 4

//     Arqués 44  C.Grau 0  E.Pont 1  Ferrero 0  Guirao 0  Jeremías-Cappa 3  Konrad 0  Mar Revert 2  Marzal 0  Medina 17  Pablo Salamnca 0  Penades 0  Raúl 0  Reyes 7