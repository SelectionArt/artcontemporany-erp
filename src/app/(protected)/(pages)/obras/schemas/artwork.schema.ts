// Vendors
import * as z from "zod";

const artworkSchema = z.object({
  artistId: z
    .string({ required_error: "El artista es requerido" })
    .min(1, "El artista es requerido"),
  colors: z.array(z.string()).max(10, "Máximo 10 imágenes permitidas"),
  finishId: z
    .string()
    .transform((value) => value?.trim() ?? "")
    .optional(),
  formatId: z
    .string()
    .transform((value) => value?.trim() ?? "")
    .optional(),
  height: z.coerce
    .number({ required_error: "El alto es requerido" })
    .positive("El alto debe ser un número positivo"),
  images: z
    .array(z.union([z.instanceof(File), z.string()]))
    .min(1, "Por lo menos una imagen es requerida")
    .max(10, "Máximo 10 imágenes permitidas")
    .refine(
      (files) =>
        files.every(
          (file) => typeof file === "string" || file.size < 10 * 1024 * 1024,
        ),
      "El tamaño máximo permitido por imagen es de 10MB",
    )
    .refine(
      (files) =>
        files.every(
          (file) =>
            typeof file === "string" ||
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
    .transform((value) => value?.trim() ?? "")
    .optional(),
  styleId: z
    .string()
    .transform((value) => value?.trim() ?? "")
    .optional(),
  supportId: z
    .string()
    .transform((value) => value?.trim() ?? "")
    .optional(),
  tag: z
    .string()
    .transform((value) => value?.trim() ?? "")
    .optional(),
  title: z
    .string()
    .transform((value) => value?.trim() ?? "")
    .optional(),
  width: z.coerce
    .number({ required_error: "El ancho es requerido" })
    .positive("El ancho debe ser un número positivo"),
});

export { artworkSchema };
