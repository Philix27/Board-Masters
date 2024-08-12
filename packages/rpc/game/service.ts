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
  movePiece(props: z.infer<typeof GameSchema.movePiece>): Promise<IGameReturnType['movePiece']> {
    console.log("Moved a piece game service")
    throw new Error('Method not implemented.');
  }

  @logFn()
  update(props: z.infer<typeof GameSchema.update>): Promise<IGameReturnType['update']> {
    throw new Error('Method not implemented.');
  }
}
