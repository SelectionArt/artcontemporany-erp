// Vendors
import * as z from "zod";

const manufacturerSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido"),
});

export { manufacturerSchema };
