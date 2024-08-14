import { z } from 'zod';

export const UserSchema = {
  create: z.object({
    walletAddress: z.string(),
  }),
  update: z.object({
    userId: z.number(),
    rating: z.number(),
    username: z.string(),
  }),
};

export type IUserReturnType = {
  update: {
    msg: string;
  };
  create: {
    msg: string;
    userId: number;
  };
};
