// Vendors
import * as z from "zod";
// Schemas
import { colorSchema } from "../color.schema";

export type ColorSchema = z.infer<typeof colorSchema>;
