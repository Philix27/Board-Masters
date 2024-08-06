import { z } from 'zod';
import { logFn } from '@/lib';
import { IGame } from '.';
import { GameSchema, IGameReturnType } from './schema';

export class GameService implements IGame {
  @logFn()
  create(props: z.infer<typeof GameSchema.create>): Promise<IGameReturnType['create']> {
    throw new Error('Method not implemented.');
  }

  @logFn()
  update(props: z.infer<typeof GameSchema.update>): Promise<IGameReturnType['update']> {
    throw new Error('Method not implemented.');
  }
}
