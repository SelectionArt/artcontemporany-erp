// Vendors
import * as z from "zod";

const userSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido"),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  isAuthorized: z.coerce.boolean({
    required_error: "El autorizado es requerido",
  }),
  role: z
    .string({ required_error: "El rol es requerido" })
    .min(1, "El rol es requerido"),
});

export { userSchema };
