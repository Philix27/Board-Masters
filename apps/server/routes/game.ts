import { Hono } from 'hono';
import { ApiSchema, ApiService } from '@repo/rpc';
import { zValidator } from '@hono/zod-validator';
import { HttpStatusCode } from 'axios';

const service = new ApiService.user();
const schema = ApiSchema.user;

export const gameRoutes = new Hono()
  .post('/create', zValidator('json', schema.create), async (c) => {
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
  .post('/update', zValidator('json', schema.update), async (c) => {
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
