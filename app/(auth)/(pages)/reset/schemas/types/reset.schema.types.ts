// Vendors
import * as z from "zod";
// Schemas
import { resetSchema } from "../reset.schema";

type ResetSchema = z.infer<typeof resetSchema>;

export type { ResetSchema };
