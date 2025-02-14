// Vendors
import * as z from "zod";

const colorSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido"),
});

export { colorSchema };
