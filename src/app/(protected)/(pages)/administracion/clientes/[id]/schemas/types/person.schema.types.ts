// Vendors
import * as z from "zod";
// Schemas
import { personSchema } from "../person.schema";

export type PersonSchema = z.infer<typeof personSchema>;
