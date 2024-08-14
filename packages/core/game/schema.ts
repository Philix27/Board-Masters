import { z } from 'zod';

export const GameSchema = {
  create: z.object({
    userAddress: z.string(),
  }),
  update: z.object({
    urlParameter: z.string(),
  }),
  movePiece: z.object({
    from: z.string(),
    to: z.string(),
    userAddress: z.string(),
  }),
};

export type IGameReturnType = {
  movePiece: { from: string; to: string; gameId: string };
  update: {
    msg: string;
  };
  create: {
    gameId: string;
  };
};
