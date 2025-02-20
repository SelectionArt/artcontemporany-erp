// Vendors
import * as z from "zod";
// Schemas
import { incrementSchema, pricingSchema } from "../pricing.schema";

type IncrementSchema = z.infer<typeof incrementSchema>;

type PricingSchema = z.infer<typeof pricingSchema>;

export type { IncrementSchema, PricingSchema };
