import { z } from "zod";

export const updateSupplierSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  phone: z.string().min(8).optional(),
  address: z.string().optional(),
  isActive: z.boolean().optional(),
});
