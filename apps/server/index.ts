import { registerRoutes } from './routes';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { appLogger } from '@repo/rpc';
import { createBunWebSocket } from 'hono/bun';
export * from './routes';

export type EventType = 'MOVE' | 'GAME_START';
const { upgradeWebSocket, websocket } = createBunWebSocket();

const app = new Hono();

// app.use("*", cors({ origin: "*" }));
app.use('*', cors({ origin: ['*', 'http://localhost:3000'] }));
// app.use("*", logger());

app.use('*', logger(appLogger));

const routes = registerRoutes(app);

app
  .get('/', (c) => {
    return c.text('Hello Hono!');
  })
  .get(
    '/ws',
    upgradeWebSocket((c) => {
      return {
        onMessage(event, ws) {
          console.log(`Message from client: ${event.data}`);
          ws.send(`EVENT STRUCTURE! ${event.data}`);
        },
        onClose: () => {
          console.log('Connection closed');
        },
      };
    })
  );

const port = process.env.PORT;
console.log(`Server is running on port ${port}`);

Bun.serve({
  port,
  fetch: app.fetch,
  websocket,
});

export type AppType = typeof routes;
