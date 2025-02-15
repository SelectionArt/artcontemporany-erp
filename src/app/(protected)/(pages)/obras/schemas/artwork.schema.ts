// Vendors
import * as z from "zod";

const artworkSchema = z.object({
  artistId: z
    .string({ required_error: "El artista es requerido" })
    .min(1, "El artista es requerido"),
  colorId: z
    .string()
    .optional()
    .transform((value) => value?.trim() ?? ""),
  finishId: z
    .string()
    .optional()
    .transform((value) => value?.trim() ?? ""),
  formatId: z
    .string()
    .optional()
    .transform((value) => value?.trim() ?? ""),
  height: z.coerce
    .number({ required_error: "El alto es requerido" })
    .positive("El alto debe ser un número positivo"),
  images: z
    .array(z.instanceof(File))
    .min(1, "Por lo menos una imagen es requerida")
    .max(5, "Máximo 5 imágenes permitidas")
    .refine(
      (files) => files.every((file) => file.size < 5 * 1024 * 1024),
      "El tamaño máximo permitido por imagen es de 5MB",
    )
    .refine(
      (files) =>
        files.every((file) =>
          ["image/jpeg", "image/png", "image/webp"].includes(file.type),
        ),
      "Solo se permiten imágenes en formato JPEG, PNG o WEBP",
    ),
  referenceNumber: z.coerce
    .number({ required_error: "El número de referencia es requerido" })
    .positive("El número de referencia debe ser un número positivo")
    .int("El número de referencia debe ser un número entero")
    .min(1, "El número de referencia debe ser entre 1 y 999999")
    .max(999999, "El número de referencia debe ser entre 1 y 999999"),
  referenceCode: z
    .string()
    .optional()
    .transform((value) => value?.trim() ?? ""),
  styleId: z
    .string()
    .optional()
    .transform((value) => value?.trim() ?? ""),
  supportId: z
    .string()
    .optional()
    .transform((value) => value?.trim() ?? ""),
  title: z
    .string()
    .optional()
    .transform((value) => value?.trim() ?? ""),
  width: z.coerce
    .number({ required_error: "El ancho es requerido" })
    .positive("El ancho debe ser un número positivo"),
});

export { artworkSchema };
