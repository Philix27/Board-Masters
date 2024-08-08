import { movesRoutes } from './moves';
import { gameRoutes } from './game';
import { indexRoutes } from './home';
import { userRoutes } from './user';
import { Hono } from 'hono';
import { BlankEnv, BlankSchema } from 'hono/types';

export function registerRoutes(app: Hono<BlankEnv, BlankSchema, '/'>) {
  const apiRoutes = app
    .basePath('/api')
    .route('/', indexRoutes)
    .route('/user', userRoutes)
    .route('/moves', movesRoutes)
    .route('/games', gameRoutes);

  return apiRoutes;
}
onError