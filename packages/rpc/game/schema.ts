import { z } from 'zod';

export const GameSchema = {
  create: z.object({
    urlParameter: z.string(),
  }),
  update: z.object({
    urlParameter: z.string(),
  }),
};

export type IGameReturnType = {
  update: {
    msg: string;
  };
  create: {
    msg: string;
  };
};
