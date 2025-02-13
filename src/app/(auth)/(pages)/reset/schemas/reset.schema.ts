// Vendors
import { object, string } from "zod";

const resetSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
});

export { resetSchema };
