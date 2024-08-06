import { z } from 'zod';
import { IScore, ApiSchema } from '@repo/rpc';
import { logFn } from '@server/lib';
import { IScoreReturnType } from '@repo/rpc/score/schema';

export class ScoreService implements IScore {
  @logFn()
  create(props: z.infer<typeof ApiSchema.score.create>): Promise<IScoreReturnType['create']> {
    throw new Error('Method not implemented.');
  }

  @logFn()
  update(props: z.infer<typeof ApiSchema.score.update>): Promise<IScoreReturnType['update']> {
    throw new Error('Method not implemented.');
  }
}
