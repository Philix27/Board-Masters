import { Request, Response, Router } from 'express';
import { z } from 'zod';
import { validateRequest } from 'zod-express-middleware';

const router = Router();

router.get(
  '/user/',
  validateRequest({
    params: z.object({
      urlParameter: z.string().optional(),
    }),
    body: z.object({
      bodyKey: z.number().optional(),
    }),
    query: z.object({
      queryKey: z.string().length(64).optional(),
    }),
  }),
  async (req, res: Response) => {
    return res.json({ message: 'Validation for body passed' });
  }
);

router.post(
  '/user/',
  validateRequest({
    params: z.object({
      urlParameter: z.string().optional(),
    }),
    body: z.object({
      bodyKey: z.number().optional(),
    }),
    query: z.object({
      queryKey: z.string().length(64).optional(),
    }),
  }),
  async (req, res: Response) => {
    return res.json({ message: 'Validation for body passed' });
  }
);

router.put(
  '/user/',
  validateRequest({
    params: z.object({
      urlParameter: z.string().optional(),
    }),
    body: z.object({
      bodyKey: z.number().optional(),
    }),
    query: z.object({
      queryKey: z.string().length(64).optional(),
    }),
  }),
  async (req, res: Response) => {
    return res.json({ message: 'Validation for body passed' });
  }
);
