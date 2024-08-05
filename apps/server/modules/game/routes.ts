import { Hono } from 'hono';
import { ApiSchema as schema } from '@repo/rpc';
import { zValidator } from '@hono/zod-validator';
import { HttpStatusCode } from 'axios';
import { GameService } from './service';

const service = new GameService();

export const gameRoutes = new Hono()
  .post('/create', zValidator('json', schema.game.create), async (c) => {
    try {
      const payload = c.req.valid('json');
      return c.json(await service.create(payload));
    } catch (error) {
      return c.json(
        {
          msg: error,
        },
        HttpStatusCode.InternalServerError
      );
    }
  })
  .post('/update', zValidator('json', schema.game.update), async (c) => {
    try {
      const payload = c.req.valid('json');
      return c.json(await service.create(payload));
    } catch (error) {
      return c.json(
        {
          msg: error,
        },
        HttpStatusCode.InternalServerError
      );
    }
  });
