import { Hono } from 'hono';
import { ScoreService } from './service';
import { ApiSchema as schema } from '@repo/rpc';
import { zValidator } from '@hono/zod-validator';
import { HttpStatusCode } from 'axios';

const service = new ScoreService();

export const scoreRoutes = new Hono()
  .post('/create', zValidator('json', schema.score.create), async (c) => {
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
  .post('/update', zValidator('json', schema.score.update), async (c) => {
    try {
      const payload = c.req.valid('json');
      return c.json(await service.update(payload));
    } catch (error) {
      return c.json(
        {
          msg: error,
        },
        HttpStatusCode.InternalServerError
      );
    }
  });
