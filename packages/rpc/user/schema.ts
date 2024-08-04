import { z } from 'zod';

export const UserSchemaCreate = {
  params: z.object({
    urlParameter: z.string(),
  }),
  body: z.object({
    bodyKey: z.number(),
  }),
  query: z.object({
    queryKey: z.string().length(64),
  }),
};
export const UserSchemaUpdate = {
  params: z.object({
    urlParameter: z.string(),
  }),
  body: z.object({
    bodyKey: z.number(),
  }),
  query: z.object({
    queryKey: z.string().length(64),
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
