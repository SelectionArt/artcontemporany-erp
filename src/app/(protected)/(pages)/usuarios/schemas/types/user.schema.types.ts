// Vendors
import * as z from "zod";
// Schemas
import { userSchema } from "../user.schema";

export type UserSchema = z.infer<typeof userSchema>;
