// Vendors
import * as z from "zod";
// Schemas
import { frameSchema } from "../frame.schema";

export type FrameSchema = z.infer<typeof frameSchema>;
