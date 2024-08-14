import { z } from 'zod';

export const MovesSchema = {
  create: z.object({
    walletAddress: z.string(),
    network: z.string(),
  }),
  update: z.object({
    urlParameter: z.string(),
  }),
};

export type IMovesReturnType = {
  update: {
    msg: string;
  };
  create: {
    msg: string;
  };
};
