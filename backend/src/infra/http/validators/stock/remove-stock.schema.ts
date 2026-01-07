import { z } from "zod";

export const removeStockSchema = z.object({
  productId: z.string().uuid(),
  quantity: z.number().int().positive(),
  reason: z.string().optional(),
});