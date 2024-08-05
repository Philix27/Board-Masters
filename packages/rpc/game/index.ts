import { request } from '../utils';
import { z } from 'zod';
import { GameSchema, IGameReturnType } from './schema';

export interface IGame {
  create(props: z.infer<typeof GameSchema.create>): Promise<IGameReturnType['create']>;

  update(props: z.infer<typeof GameSchema.update>): Promise<IGameReturnType['update']>;
}

export class GameRpc implements IGame {
  async create(props: z.infer<typeof GameSchema.create>): Promise<IGameReturnType['create']> {
    return await request(props, '/game/create/');
  }

  async update(props: z.infer<typeof GameSchema.update>): Promise<IGameReturnType['update']> {
    return await request(props, '/game/update/');
  }
}
