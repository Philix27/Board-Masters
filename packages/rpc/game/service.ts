import { z } from 'zod';
import { IGame, ApiSchema } from '@repo/rpc';
import { IGameReturnType } from '@repo/rpc/game/schema';
import { logFn } from '@server/lib';

export class GameService implements IGame {
  @logFn()
  create(props: z.infer<typeof ApiSchema.game.create>): Promise<IGameReturnType['create']> {
    throw new Error('Method not implemented.');
  }

  @logFn()
  update(props: z.infer<typeof ApiSchema.game.update>): Promise<IGameReturnType['update']> {
    throw new Error('Method not implemented.');
  }
}
