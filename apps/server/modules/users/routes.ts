import { Hono } from 'hono';
import { ApiSchema as schema } from '@repo/rpc';
import { zValidator } from '@hono/zod-validator';
import { HttpStatusCode } from 'axios';
import { UserService } from './service';
import { PrismaClient } from '@prisma/client';

const service = new UserService(new PrismaClient());

export const userRoutes = new Hono()
  .post('/create', zValidator('json', schema.user.create), async (c) => {
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
  .post('/update', zValidator('json', schema.user.update), async (c) => {
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
