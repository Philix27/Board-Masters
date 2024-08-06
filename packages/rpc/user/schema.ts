import { z } from 'zod';

export const UserSchema = {
  create: z.object({
    walletAddress: z.string(),
    network: z.string(),
  }),
  update: z.object({
    urlParameter: z.string(),
  }),
};

export type IUserReturnType = {
  update: {
    msg: string;
  };
  create: {
    msg: string;
  };
};
