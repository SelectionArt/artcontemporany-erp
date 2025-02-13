// Vendors
import * as z from "zod";
// Schemas
import { eventSchema } from "../event.schema";

export type EventSchema = z.infer<typeof eventSchema>;
