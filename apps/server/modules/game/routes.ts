import { Hono } from "hono";
import { BeneficiaryService } from "./service";
import { BeneficiaryRepository } from "./repo";
import { AirtimeBeneficiarySchema as schema } from "@repo/rpc";
import { zValidator } from "@hono/zod-validator";
import { HttpStatusCode } from "axios";

const service = new BeneficiaryService(new BeneficiaryRepository());

export const beneficiaryRoutes = new Hono()
  .post("/create", zValidator("json", schema.create), async (c) => {
    try {
      const payload = c.req.valid("json");
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
  .post("/get_all", zValidator("json", schema.getAll), async (c) => {
    try {
      const payload = c.req.valid("json");
      return c.json(await service.getAll(payload));
    } catch (error) {
      return c.json(
        {
          msg: error,
        },
        HttpStatusCode.InternalServerError
      );
    }
  })
  .post("/delete", zValidator("json", schema.delete), async (c) => {
    try {
      const payload = c.req.valid("json");
      return c.json(await service.delete(payload));
    } catch (error) {
      return c.json(
        {
          msg: error,
        },
        HttpStatusCode.InternalServerError
      );
    }
  });
