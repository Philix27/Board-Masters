import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const setUpAccountSchema = zValidator(
  "json",
  z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().min(7, { message: "Please use a valid email" }),
    bvn: z
      .string()
      .min(11, { message: "Please enter a valid bvn" })
      .max(11, { message: "Please enter a valid bvn" }),
    dob: z.date(),
    isMale: z.boolean(),
    address: z.string(),
    proofOfAddress: z.string(),
    proofOfIdentity: z.string(),
  })
);

export const jobDetailsSchema = zValidator(
  "json",
  z.object({
    parastatal: z.string(),
    country: z.string(),
    state: z.string(),
    lga: z.string(),
    contributionType: z.string(),
    jobIdentityUrl: z.string(),
  })
);

//  todo: Unimplemented
export const getClusterSchema = zValidator(
  "json",
  z.object({
    phone: z.string(),
    referralCode: z.string(),
  })
);
export const sendOtpSchema = zValidator(
  "json",
  z.object({
    phone: z.string(),
    referralCode: z.string(),
  })
);

export const verifyBvnSchema = zValidator(
  "json",
  z.object({
    bvn: z.string(),
  })
);
export const createAccountSchema = zValidator(
  "json",
  z.object({
    phone: z.string(),
    bvn: z.number().min(10, { message: "Minimum of 10 numbers" }),
    password: z.string(),
    confirmPassword: z.string(),
  })
);
