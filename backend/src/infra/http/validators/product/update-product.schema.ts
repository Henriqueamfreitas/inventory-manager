import { z } from "zod";

export const updateProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).optional(),
  price: z.number().positive().optional(),
  quantity: z.number().int().min(0).optional(),
  categoryId: z.string().uuid().optional(),
  isActive: z.boolean().optional(),
});