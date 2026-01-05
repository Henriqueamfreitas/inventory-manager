import { z } from "zod";

export const updateCategorySchema = z.object({
  name: z
    .string()
    .min(2, "Name must have at least 2 characters")
    .optional(),

  description: z
    .string()
    .optional(),
});