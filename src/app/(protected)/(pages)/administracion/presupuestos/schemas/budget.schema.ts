// Vendors
import * as z from "zod";

const budgetSchema = z.object({
  clientId: z
    .string({ required_error: "El cliente es requerido" })
    .min(1, "El cliente es requerido"),
  date: z
    .string({ required_error: "La fecha es requerida" })
    .min(1, "La fecha es requerida"),
  items: z
    .array(
      z.object({
        artworkId: z
          .string({ required_error: "La obra es requerida" })
          .min(1, "La obra es requerida"),
        artworkPrice: z.coerce
          .number({ required_error: "El precio es requerido" })
          .positive("El precio debe ser un número positivo"),
        artworkPricingId: z
          .string({ required_error: "La tarifa de la obra es requerida" })
          .min(1, "La tarifa de la obra es requerida"),
        frameId: z.string().optional(),
        framePrice: z.coerce.number().optional(),
        framePricingId: z.string().optional(),
        height: z.coerce
          .number({ required_error: "La altura es requerida" })
          .positive("La altura debe ser un número positivo"),
        observations: z.string().optional(),
        quantity: z.coerce
          .number({ required_error: "La cantidad es requerida" })
          .positive("La cantidad debe ser un número positivo"),
        width: z.coerce
          .number({ required_error: "El ancho es requerido" })
          .positive("El ancho debe ser un número positivo"),
      }),
    )
    .optional()
    .default([]),
  number: z.coerce
    .number({ required_error: "El número es requerido" })
    .positive("El número debe ser un número positivo"),
  observations: z.string().optional(),
  reference: z.string().optional(),
  validity: z.coerce
    .number({ required_error: "La validez es requerida" })
    .positive("La validez debe ser un número positivo"),
  discount: z.coerce.number({ required_error: "El descuento es requerido" }),
  transport: z.coerce.number({ required_error: "El transporte es requerido" }),
  tax: z.coerce.number({ required_error: "El IVA es requerido" }),
  paymentMethod: z
    .string({ required_error: "La forma de pago es requerida" })
    .min(1, "La forma de pago es requerida"),
  status: z
    .string({ required_error: "El estado es requerido" })
    .min(1, "El estado es requerido"),
  sendAddress: z.string().optional(),
  showIBAN: z.coerce.boolean({
    required_error: "El mostrar IBAN es requerido",
  }),
});

export { budgetSchema };
