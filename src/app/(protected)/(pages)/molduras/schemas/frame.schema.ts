// Vendors
import * as z from "zod";

const frameSchema = z.object({
  description: z
    .string()
    .transform((value) => value?.trim() ?? "")
    .optional(),
  height: z.coerce
    .number({ required_error: "El alto es requerido" })
    .optional(),
  galce: z.coerce
    .number({ required_error: "El galce es requerido" })
    .optional(),
  images: z
    .array(z.union([z.instanceof(File), z.string()]))
    .min(1, "Por lo menos una imagen es requerida")
    .max(10, "Máximo 10 imágenes permitidas")
    .refine(
      (files) =>
        files.every(
          (file) => typeof file === "string" || file.size < 5 * 1024 * 1024,
        ),
      "El tamaño máximo permitido por imagen es de 5MB",
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
  manufacturerId: z
    .string()
    .transform((value) => value?.trim() ?? "")
    .optional(),
  manufacturerReference: z
    .string()
    .transform((value) => value?.trim() ?? "")
    .optional(),
  materialId: z
    .string()
    .transform((value) => value?.trim() ?? "")
    .optional(),
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido"),
  reference: z
    .string({ required_error: "La referencia es requerida" })
    .min(1, "La referencia es requerida"),
  width: z.coerce
    .number({ required_error: "El ancho es requerido" })
    .optional(),
});

export { frameSchema };
