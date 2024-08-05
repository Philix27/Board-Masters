import { GameRpc } from './game';
import { GameSchema } from './game/schema';
import { ScoreRpc } from './score';
import { ScoreSchema } from './score/schema';
import { UserRpc } from './user';
import { UserSchema } from './user/schema';

export const AppRpc = {
  score: new ScoreRpc(),
  game: new GameRpc(),
  user: new UserRpc(),
};

export const ApiSchema = {
  score: ScoreSchema,
  game: GameSchema,
  user: UserSchema,
};

export * from './score';
export * from './game';
export * from './user';
