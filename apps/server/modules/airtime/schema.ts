import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const createSchema = zValidator(
  "json",
  z.object({
    phone: z.string(),
    user_id: z.number(),
  })
);

export const updateSchema = zValidator(
  "json",
  z.object({
    name: z.string().optional(),
    desc: z.string().optional(),
  })
);
export const getAllSchema = zValidator(
  "json",
  z.object({
    user_id: z.number(),
    limit: z.number().optional(),
    offset: z.number().optional(),
  })
);
