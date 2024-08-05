import { Hono } from "hono";
import { AirtimePlanService } from "./service";
import { AirtimeRepository } from "./repo";

const service = new AirtimePlanService(new AirtimeRepository());

export const airtimePlanRoutes = new Hono().get("/", async (c) => {
  try {
    const res = await service.getAll();
    return c.json({
      res,
    });
  } catch (error) {
    return c.json({
      msg: error,
    });
  }
});
