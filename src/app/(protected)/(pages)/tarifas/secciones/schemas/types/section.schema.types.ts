// Vendors
import * as z from "zod";
// Schemas
import { sectionSchema } from "../section.schema";

export type SectionSchema = z.infer<typeof sectionSchema>;
