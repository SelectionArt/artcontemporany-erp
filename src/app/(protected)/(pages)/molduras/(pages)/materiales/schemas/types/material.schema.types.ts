// Vendors
import * as z from "zod";
// Schemas
import { materialSchema } from "../material.schema";

export type MaterialSchema = z.infer<typeof materialSchema>;
