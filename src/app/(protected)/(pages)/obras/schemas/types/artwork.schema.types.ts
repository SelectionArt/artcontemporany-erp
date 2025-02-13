// Vendors
import * as z from "zod";
// Schemas
import { artworkSchema } from "../artwork.schema";

export type ArtworkSchema = z.infer<typeof artworkSchema>;
