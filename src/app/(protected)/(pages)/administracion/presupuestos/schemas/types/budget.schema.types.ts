// Vendors
import * as z from "zod";
// Schemas
import { budgetSchema } from "../budget.schema";

export type BudgetSchema = z.infer<typeof budgetSchema>;
