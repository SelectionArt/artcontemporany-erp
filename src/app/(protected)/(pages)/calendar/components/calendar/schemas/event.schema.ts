// Vendors
import { boolean, object, string } from "zod";

const eventSchema = object({
  title: string({ required_error: "Title is required" }).min(
    1,
    "Title is required",
  ),
  start: string().datetime(),
  end: string().datetime(),
  allDay: boolean(),
  description: string().optional(),
});

export { eventSchema };
