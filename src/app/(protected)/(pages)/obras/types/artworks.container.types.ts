import type { Artist } from "../(pages)/artistas/types/artists.container.types";
import type { Color } from "../(pages)/colores/types/colors.container.types";
import type { Finish } from "../(pages)/acabados/types/finishes.container.types";
import type { Format } from "../(pages)/formatos/types/formats.container.types";
import type { Style } from "../(pages)/estilos/types/styles.container.types";
import type { Support } from "../(pages)/soportes/types/supports.container.types";

type Artwork = {
  id: string;
  title: string;
  referenceNumber: number;
  referenceCode: string;
  width: number;
  height: number;
  artistId: string;
  finishId: string;
  supportId: string;
  colorId: string;
  styleId: string;
  formatId: string;
};

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
