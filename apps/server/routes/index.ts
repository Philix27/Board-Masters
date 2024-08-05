import {
  airtimePlanRoutes,
  beneficiaryRoutes,
  giftCardRoutes,
  userRoutes,
} from "../modules";
import { indexRoutes } from "./home";
import { Hono } from "hono";
import { BlankEnv, BlankSchema } from "hono/types";

export function registerRoutes(app: Hono<BlankEnv, BlankSchema, "/">) {
  const apiRoutes = app
    .basePath("/api")
    .route("/", indexRoutes)
    .route("/user", userRoutes)
    .route("/beneficiary", beneficiaryRoutes)
    .route("/gift_card", giftCardRoutes)
    .route("/airtime", airtimePlanRoutes);

  return apiRoutes;
}
