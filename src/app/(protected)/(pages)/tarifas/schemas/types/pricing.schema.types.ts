// Vendors
import * as z from "zod";
// Schemas
import { pricingSchema } from "../pricing.schema";

export type PricingSchema = z.infer<typeof pricingSchema>;
