import { scoreRoutes } from '@server/modules';
import { gameRoutes, userRoutes } from '../modules';
import { indexRoutes } from './home';
import { Hono } from 'hono';
import { BlankEnv, BlankSchema } from 'hono/types';

export function registerRoutes(app: Hono<BlankEnv, BlankSchema, '/'>) {
  const apiRoutes = app
    .basePath('/api')
    .route('/', indexRoutes)
    .route('/user', userRoutes)
    .route('/score', scoreRoutes)
    .route('/games', gameRoutes);

  return apiRoutes;
}
