// Vendors
import * as z from "zod";

const manufacturerSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido"),
  reference: z
    .string({ required_error: "La referencia es requerida" })
    .min(1, "La referencia es requerida"),
});

export { manufacturerSchema };
