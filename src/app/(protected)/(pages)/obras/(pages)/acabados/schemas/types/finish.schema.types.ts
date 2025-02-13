// Vendors
import * as z from "zod";
// Schemas
import { finishSchema } from "../finish.schema";

export type FinishSchema = z.infer<typeof finishSchema>;
