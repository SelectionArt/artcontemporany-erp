// Vendors
import * as z from "zod";

const budgetSchema = z.object({
  clientId: z
    .string({ required_error: "El cliente es requerido" })
    .min(1, "El cliente es requerido"),
  date: z
    .string({ required_error: "La fecha es requerida" })
    .min(1, "La fecha es requerida"),
  items: z.array(
    z.object({
      artworkId: z
        .string({ required_error: "La obra es requerida" })
        .min(1, "La obra es requerida"),
      artworkPrice: z.coerce
        .number({ required_error: "El precio es requerido" })
        .min(0, "El precio debe ser mayor o igual a 0"),
      artworkPricingId: z.string().optional(),
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
  ),
  number: z.coerce
    .number({ required_error: "El número es requerido" })
    .positive("El número debe ser un número positivo"),
  observations: z.string().optional(),
  reference: z.string().optional(),
  validity: z
    .string({ required_error: "La validez es requerida" })
    .min(1, "La validez es requerida"),
  discount: z.coerce.number({ required_error: "El descuento es requerido" }),
  transport: z.coerce.number({ required_error: "El transporte es requerido" }),
  tax: z.coerce.number({ required_error: "El IVA es requerido" }),
  paymentMethod: z
    .string({ required_error: "La forma de pago es requerida" })
    .min(1, "La forma de pago es requerida"),
  surcharge: z.coerce.number({
    required_error: "El recargo equivalente es requerido",
  }),
  status: z
    .string({ required_error: "El estado es requerido" })
    .min(1, "El estado es requerido"),
  sendAddress: z.string().optional(),
  showIBAN: z.coerce.boolean({
    required_error: "El mostrar IBAN es requerido",
  }),
});

const sendEmailSchema = z.object({
  type: z
    .string({ required_error: "El tipo es requerido" })
    .min(1, "El tipo es requerido"),
  emails: z.array(z.string()).max(10, "Máximo 10 emails permitidas"),
  freeEmails: z
    .array(z.string().email("Email no válido"))
    .max(10, "Máximo 10 emails permitidas"),
  subject: z
    .string({ required_error: "El asunto es requerido" })
    .min(1, "El asunto es requerido"),
  message: z
    .string({ required_error: "El mensaje es requerido" })
    .min(1, "El mensaje es requerido"),
});

export { budgetSchema, sendEmailSchema };
