import {
  sendOtpSchema,
  setUpAccountSchema,
  jobDetailsSchema,
  getClusterSchema,
} from "./schema";
import { Hono } from "hono";


export const userRoutes = new Hono()

  .post("/job_details", jobDetailsSchema, async (c) => {
    return c.json({
      msg: "Otp verified",
    });
  })
  .patch("/setup_account", setUpAccountSchema, async (c) => {
    return c.json({
      msg: "Otp verified",
    });
  })
  .post("/create_cluster", sendOtpSchema, async (c) => {
    return c.json({ msg: "Otp Sent" }, 200);
  })
  .post("/get_cluster/:id",getClusterSchema, async (c) => {
    return c.json({
      msg: "Otp verified",
    });
  });