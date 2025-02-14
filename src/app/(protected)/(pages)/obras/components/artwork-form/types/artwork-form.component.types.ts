// Types
import type { Artist } from "../../../(pages)/artistas/types/artists.container.types";
import type { Color } from "../../../(pages)/colores/types/colors.container.types";
import type { Finish } from "../../../(pages)/acabados/types/finishes.container.types";
import type { Format } from "../../../(pages)/formatos/types/formats.container.types";
import type { Style } from "../../../(pages)/estilos/types/styles.container.types";
import type { Support } from "../../../(pages)/soportes/types/supports.container.types";
import type { UseFormReturn } from "react-hook-form";
import type { ArtworkSchema } from "../../../schemas/types/artwork.schema.types";

type ArtworkFormProps = {
  artists: Artist[];
  colors: Color[];
  finishes: Finish[];
  form: UseFormReturn<ArtworkSchema>;
  formats: Format[];
  handleSubmit: (values: ArtworkSchema) => void;
  label: string;
  loading: boolean;
  styles: Style[];
  supports: Support[];
};

export type { ArtworkFormProps };
