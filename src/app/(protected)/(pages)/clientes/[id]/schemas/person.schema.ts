import { z } from "zod";

const personSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido"),
  email: z
    .string({ required_error: "El correo electrónico es requerido" })
    .min(1, { message: "El correo electrónico es requerido" })
    .email({ message: "Correo electrónico inválido" })
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
});

export { personSchema };
