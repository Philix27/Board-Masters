import { GameRpc } from './game';
import { GameSchema } from './game/schema';
import { MovesRpc } from './moves';
import { MovesSchema } from './moves/schema';

import { UserRpc } from './user';
import { UserSchema } from './user/schema';
import * as lib from '@/lib';

export const ApiRpc = {
  game: new GameRpc(),
  user: new UserRpc(),
  moves: new MovesRpc(),
};

export const ApiSchema = {
  game: GameSchema,
  user: UserSchema,
  moves: MovesSchema,
};

export const { AppError, appLogger, logFn } = lib;
export * from './socketEvents';
