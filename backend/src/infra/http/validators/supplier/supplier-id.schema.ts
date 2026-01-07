import { z } from "zod";

export const supplierParamsSchema = z.object({
  id: z.string().uuid("Invalid supplier id"),
});
