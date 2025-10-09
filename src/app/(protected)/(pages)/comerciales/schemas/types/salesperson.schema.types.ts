// Vendors
import * as z from "zod";
// Schemas
import { salespersonSchema } from "../salesperson.schema";

export type SalespersonSchema = z.infer<typeof salespersonSchema>;
