import { z } from 'zod';

export const ScoreSchema = {
  create: z.object({
    urlParameter: z.string(),
  }),
  update: z.object({
    urlParameter: z.string(),
  }),
};

export type IScoreReturnType = {
  update: {
    msg: string;
  };
  create: {
    msg: string;
  };
};
