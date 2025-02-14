// Vendors
import * as z from "zod";

const artworkSchema = z.object({
  artistId: z
    .string({ required_error: "El artista es requerido" })
    .min(1, "El artista es requerido"),
  colorId: z
    .string({ required_error: "El color es requerido" })
    .min(1, "El color es requerido"),
  finishId: z
    .string({ required_error: "El acabado es requerido" })
    .min(1, "El acabado es requerido"),
  formatId: z
    .string({ required_error: "El formato es requerido" })
    .min(1, "El formato es requerido"),
  height: z.coerce
    .number({ required_error: "El alto es requerido" })
    .positive("El alto debe ser un número positivo"),
  reference: z
    .string({ required_error: "La referencia es requerida" })
    .regex(
      /^\d{1,6}-ART$/,
      "La referencia debe ser un número entre 1 y 999999 seguido de '-ART'",
    ),
  styleId: z
    .string({ required_error: "El estilo es requerido" })
    .min(1, "El estilo es requerido"),
  supportId: z
    .string({ required_error: "El soporte es requerido" })
    .min(1, "El soporte es requerido"),
  title: z
    .string({ required_error: "El título es requerido" })
    .min(1, "El título es requerido"),
  width: z.coerce
    .number({ required_error: "El ancho es requerido" })
    .positive("El ancho debe ser un número positivo"),
});

export { artworkSchema };
