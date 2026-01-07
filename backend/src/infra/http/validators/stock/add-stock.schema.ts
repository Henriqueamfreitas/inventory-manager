import { z } from "zod";

export const addStockSchema = z.object({
  productId: z.string().uuid(),
  quantity: z.number().int().positive(),
  reason: z.string().optional(),
});