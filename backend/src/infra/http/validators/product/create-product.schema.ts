import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().positive("Price must be greater than zero"),
  quantity: z.number().int().min(0),
  categoryId: z.string().uuid("Invalid category id"),
});