import { z } from "zod";

export const createSupplierSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  address: z.string().optional(),
});
