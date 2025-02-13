// Vendors
import * as z from "zod";
// Schemas
import { styleSchema } from "../style.schema";

export type StyleSchema = z.infer<typeof styleSchema>;
