// Vendors
import * as z from "zod";
// Schemas
import { supportSchema } from "../support.schema";

export type SupportSchema = z.infer<typeof supportSchema>;
