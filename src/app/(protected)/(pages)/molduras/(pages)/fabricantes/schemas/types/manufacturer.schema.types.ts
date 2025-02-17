// Vendors
import * as z from "zod";
// Schemas
import { manufacturerSchema } from "../manufacturer.schema";

export type ManufacturerSchema = z.infer<typeof manufacturerSchema>;
