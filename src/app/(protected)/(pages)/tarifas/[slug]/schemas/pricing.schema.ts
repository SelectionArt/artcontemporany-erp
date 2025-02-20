// Vendors
import * as z from "zod";

const incrementSchema = z.object({
  fixedIncrement: z.coerce.number().optional(),
  porcentualIncrement: z.coerce.number().optional(),
});

const pricingSchema = z.object({
  height: z.coerce
    .number({ required_error: "El alto es requerido" })
    .positive("El alto debe ser un número positivo"),
  width: z.coerce
    .number({ required_error: "El ancho es requerido" })
    .positive("El ancho debe ser un número positivo"),
  price: z.coerce
    .number({ required_error: "El precio es requerido" })
    .positive("El precio debe ser un número positivo"),
});

export { incrementSchema, pricingSchema };
