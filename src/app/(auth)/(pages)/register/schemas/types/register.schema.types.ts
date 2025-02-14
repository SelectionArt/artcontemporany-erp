// Vendors
import * as z from "zod";
// Schemas
import { registerSchema } from "../register.schema";

export type RegisterSchema = z.infer<typeof registerSchema>;
