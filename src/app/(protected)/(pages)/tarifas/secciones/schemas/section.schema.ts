// Vendors
import * as z from "zod";

const sectionSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido"),
  slug: z
    .string({ required_error: "El identificador de URL es requerido" })
    .min(1, "El identificador de URL es requerido"),
});

export { sectionSchema };
