// Vendors
import * as z from "zod";
// Schemas
import { newPasswordSchema } from "../new-password.schema";

type NewPasswordSchema = z.infer<typeof newPasswordSchema>;

export type { NewPasswordSchema };
