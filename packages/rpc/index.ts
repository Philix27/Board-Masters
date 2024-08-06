import { GameRpc } from './game';
import { GameSchema } from './game/schema';
import { GameService } from './game/service';
import { MovesRpc } from './moves';
import { MovesSchema } from './moves/schema';
import { MovesService } from './moves/service';

import { UserRpc } from './user';
import { UserSchema } from './user/schema';
import { UserService } from './user/service';

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

export const ApiService = {
  game: GameService,
  user: UserService,
  moves: MovesService,
};
