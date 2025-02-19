// Vendors
import * as z from "zod";
// Schemas
import { clientSchema } from "../client.schema";

export type ClientSchema = z.infer<typeof clientSchema>;
