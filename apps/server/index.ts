import { registerRoutes } from "./routes";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { appLogger } from "@server/lib";

export * from "./routes";

// export const runtime = "edge"

const app = new Hono();

// app.use("*", cors({ origin: "*" }));
app.use("*", cors({ origin: ["http://localhost:3000"] }));
// app.use("*", logger());

app.use("*", logger(appLogger));

const routes = registerRoutes(app);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const port = process.env.PORT;
console.log(`Server is running on port ${port}`);

Bun.serve({
  port,
  fetch: app.fetch,
});

export type AppType = typeof routes;
