import { z } from "zod";

const clientSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido"),
  legalName: z.string().optional(),
  email: z
    .string()
    .refine(
      (email) =>
        email === undefined ||
        email === "" ||
        z.string().email().safeParse(email).success,
      {
        message: "Correo electrónico inválido",
      },
    ),
  phone: z.string().optional(),
  address: z.string().optional(),
  sendAddress: z.string().optional(),
  cif: z.string().optional(),
  iban: z.string().optional(),
});

export { clientSchema };
