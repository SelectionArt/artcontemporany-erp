import { z } from "zod";

const salespersonSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido"),
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
  area: z.string().optional(),
});

export { salespersonSchema };
