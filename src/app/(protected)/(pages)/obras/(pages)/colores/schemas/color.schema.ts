// Vendors
import * as z from "zod";

const colorSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido"),
  hex: z
    .string({ required_error: "El código hexadecimal es requerido" })
    .regex(
      /^#([0-9A-Fa-f]{3}){1,2}$/,
      "El código hexadecimal debe tener el formato #RRGGBB o #RGB",
    ),
});

export { colorSchema };
