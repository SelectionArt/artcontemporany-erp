// Vendors
import * as z from "zod";

const frameSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido"),
  description: z
    .string()
    .optional()
    .transform((value) => value?.trim() ?? ""),
  reference: z
    .string({ required_error: "La referencia es requerida" })
    .min(1, "La referencia es requerida"),
  weight: z
    .number()
    .optional()
    .refine((value) => value === undefined || value > 0, {
      message: "El peso debe ser un número positivo",
    }),
  height: z
    .number()
    .optional()
    .refine((value) => value === undefined || value > 0, {
      message: "La altura debe ser un número positivo",
    }),
  galce: z
    .number()
    .optional()
    .refine((value) => value === undefined || value > 0, {
      message: "El galce debe ser un número positivo",
    }),
  manufacturerId: z
    .string()
    .optional()
    .transform((value) => value?.trim() ?? ""),
  materialId: z
    .string()
    .optional()
    .transform((value) => value?.trim() ?? ""),
});

export { frameSchema };
