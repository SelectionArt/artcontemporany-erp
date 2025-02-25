// Vendors
import * as z from "zod";

const pricingSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido"),
  type: z
    .string({ required_error: "El tipo es requerido" })
    .min(1, "El tipo es requerido"),
});

export { pricingSchema };
