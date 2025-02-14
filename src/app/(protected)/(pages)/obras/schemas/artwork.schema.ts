// Vendors
import * as z from "zod";

const artworkSchema = z.object({
  artistId: z
    .string({ required_error: "El artista es requerido" })
    .min(1, "El artista es requerido"),
  width: z.coerce
    .number({ required_error: "El ancho es requerido" })
    .positive("El ancho debe ser un número positivo"),
  height: z.coerce
    .number({ required_error: "El alto es requerido" })
    .positive("El alto debe ser un número positivo"),
  colorId: z.string().optional(),
  finishId: z.string().optional(),
  formatId: z.string().optional(),
  reference: z.string().optional(),
  styleId: z.string().optional(),
  supportId: z.string().optional(),
  title: z.string().optional(),
});

export { artworkSchema };
