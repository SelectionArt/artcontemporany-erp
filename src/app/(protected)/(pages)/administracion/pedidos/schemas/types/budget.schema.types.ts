// Vendors
import * as z from "zod";
// Schemas
import { budgetSchema, sendEmailSchema } from "../budget.schema";

type BudgetSchema = z.infer<typeof budgetSchema>;

type SendEmailSchema = z.infer<typeof sendEmailSchema>;

export type { BudgetSchema, SendEmailSchema };
