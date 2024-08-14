import { request } from '../utils';
import { z } from 'zod';
import { MovesSchema, IMovesReturnType } from './schema';

export interface IMoves {
  create(props: z.infer<typeof MovesSchema.create>): Promise<IMovesReturnType['create']>;

  update(props: z.infer<typeof MovesSchema.update>): Promise<IMovesReturnType['update']>;
}

export class MovesRpc implements IMoves {
  async create(props: z.infer<typeof MovesSchema.create>): Promise<IMovesReturnType['create']> {
    return await request(props, '/user/create/');
  }

  async update(props: z.infer<typeof MovesSchema.update>): Promise<IMovesReturnType['update']> {
    return await request(props, '/user/update/');
  }
}
