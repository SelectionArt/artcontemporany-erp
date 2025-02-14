// Vendors
import * as z from "zod";
// Schemas
import { formatSchema } from "../format.schema";

export type FormatSchema = z.infer<typeof formatSchema>;
