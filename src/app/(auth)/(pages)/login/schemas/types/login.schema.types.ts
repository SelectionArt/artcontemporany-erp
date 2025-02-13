// Vendors
import * as z from "zod";
// Schemas
import { loginSchema } from "../login.schema";

export type LoginSchema = z.infer<typeof loginSchema>;
