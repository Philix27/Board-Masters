import { request } from '../utils';
import { z } from 'zod';
import { ScoreSchema, IScoreReturnType } from './schema';

export interface IScore {
  create(props: z.infer<typeof ScoreSchema.create>): Promise<IScoreReturnType['create']>;

  update(props: z.infer<typeof ScoreSchema.update>): Promise<IScoreReturnType['update']>;
}

export class ScoreRpc implements IScore {
  async create(props: z.infer<typeof ScoreSchema.create>): Promise<IScoreReturnType['create']> {
    return await request(props, '/game/create/');
  }

  async update(props: z.infer<typeof ScoreSchema.update>): Promise<IScoreReturnType['update']> {
    return await request(props, '/game/update/');
  }
}
