import { z } from "zod";

export const listProductsSchema = z.object({
  search: z.string().optional(),
  categoryId: z.string().uuid().optional(),
  isActive: z
    .string()
    .transform((v) => v === "true")
    .optional(),
});