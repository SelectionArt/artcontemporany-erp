// Vendors
import * as z from "zod";
// Schemas
import { artistSchema } from "../artist.schema";

export type ArtistSchema = z.infer<typeof artistSchema>;
