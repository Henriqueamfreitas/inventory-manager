import { z } from "zod";

export const deactivateProductSchema = z.object({
  id: z.string().uuid(),
});